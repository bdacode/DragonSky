/**
 * Created with JetBrains WebStorm.
 * User: robert
 * Date: 9/17/13
 * Time: 10:26 AM
 * To change this template use File | Settings | File Templates.
 */

var Anchor = Anchor || {};

Anchor.Center = new cc.Point(0.5, 0.5);
Anchor.Top = new cc.Point(0.5, 1);
Anchor.TopRight = new cc.Point(1, 1);
Anchor.Right = new cc.Point(1, 0.5);
Anchor.BottomRight = new cc.Point(1, 0);
Anchor.Bottom = new cc.Point(0.5, 0);
Anchor.BottomLeft = new cc.Point(0, 0);
Anchor.Left = new cc.Point(0, 0.5);
Anchor.TopLeft = new cc.Point(0, 1);

var s_rcVisible = cc.RectZero();
var s_ptCenter = cc.PointZero();
var s_ptTop = cc.PointZero();
var s_ptTopRight = cc.PointZero();
var s_ptRight = cc.PointZero();
var s_ptBottomRight = cc.PointZero();
var s_ptBottom = cc.PointZero();
var s_ptLeft = cc.PointZero();
var s_ptTopLeft = cc.PointZero();

var collide = function (a, b) {
    var pos1 = a.getPosition();
    var pos2 = b.getPosition();
    if (Math.abs(pos1.x - pos2.x) > MAX_CONTAINT_WIDTH || Math.abs(pos1.y - pos2.y) > MAX_CONTAINT_HEIGHT)
        return false;

    var aRect = a.collideRect(pos1);
    var bRect = b.collideRect(pos2);
    return cc.rectIntersectsRect(aRect, bRect);
};

cc.Node.prototype.Center = function(){
    var p = new cc.Point(this.getContentSize().width/2,this.getContentSize().height/2);
    return p;
};

cc.Point.prototype.add = function (x, y) {
    var p = new cc.Point(this.x + x, this.y + y);
    return p;
};

// 재정의
cc.Menu.prototype.alignItemsInColumns =  function (/*Multiple Arguments*/) {
    if((arguments.length > 0) && (arguments[arguments.length-1] == null))
        cc.log("parameters should not be ending with null in Javascript");

    var rows = [];
    for (var i = 0; i < arguments.length; i++) {
        rows.push(arguments[i]);
    }
    var height = -5;
    var row = 0;
    var rowHeight = 0;
    var columnsOccupied = 0;
    var rowColumns, tmp, len;
    var locChildren = this._children;
    if (locChildren && locChildren.length > 0) {
        for (i = 0, len = locChildren.length; i < len; i++) {
            cc.Assert(row < rows.length, "");

            rowColumns = rows[row];
            // can not have zero columns on a row
            cc.Assert(rowColumns, "");

            tmp = locChildren[i].getContentSize().height;
            rowHeight = ((rowHeight >= tmp || isNaN(tmp)) ? rowHeight : tmp);

            ++columnsOccupied;
            if (columnsOccupied >= rowColumns) {
                height += rowHeight + 5;

                columnsOccupied = 0;
                rowHeight = 0;
                ++row;
            }
        }
    }
    // check if too many rows/columns for available menu items
    cc.Assert(!columnsOccupied, "");
    var winSize = cc.Director.getInstance().getVisibleSize();
    var width = winSize.width*1.1; // 여백 설정

    row = 0;
    rowHeight = 0;
    rowColumns = 0;
    var w = 0.0;
    var x = 0.0;
    var y = (height / 2);

    if (locChildren && locChildren.length > 0) {
        for (i = 0, len = locChildren.length; i < len; i++) {
            var child = locChildren[i];
            if (rowColumns == 0) {
                rowColumns = rows[row];
                w = width/ (1 + rowColumns);
                x = w;
            }

            tmp = child.getContentSize().height;
            rowHeight = ((rowHeight >= tmp || isNaN(tmp)) ? rowHeight : tmp);
            child.setPosition(x - width / 2, y - tmp / 2);

            x += w;
            ++columnsOccupied;

            if (columnsOccupied >= rowColumns) {
                y -= rowHeight + 3; // 세로여백
                columnsOccupied = 0;
                rowColumns = 0;
                rowHeight = 0;
                ++row;
            }
        }
    }
};

/**
 * 랜덤 추출
 * @param array
 * @param idx
 * @returns {Array|string}
 */
function randomExtract(array, idx){
    return shuffleArray(array).slice(0,idx);
}

/**
 * 배열에서 다른 배열의 중복 제거
 * @param letterAr
 * @param answerAr
 * @returns {*}
 */
function removeDuplicate(letterAr,answerAr){
    for(i = 0 ; i < answerAr.length; i ++){
        letterAr = removeArry(letterAr,answerAr[i]); // 정답과 중복되는 글자 제거
    }
    return letterAr;
}

/**
 * 배열에서 객체 제거
 * @param arr
 * @returns {*}
 */
function removeArry(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}


Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return i;
        }
    }
    return -1;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}



function shuffleNumber(n){
    var ar = new Array();
    var temp;
    var rnum;

    for(var i=1; i<=n; i++){
        ar.push(i);
    }

    return shuffleArray(ar);
}

String.prototype.killWhiteSpace = function() {
    return this.replace(/\s/g, '');
};

cc.Node.prototype.getWorldPos = function(){
    return this.getParent().convertToWorldSpace(this.getPosition());
};




function rangeRand (min, max) {
    return Math.random() * (max - min) + min;
}




cc.Shake = cc.ActionInterval.extend({
    _initial_x : null,
    _initial_y : null,
    _strength_x : null,
    _strength_y : null,


    ctor:function () {
        cc.ActionInterval.prototype.ctor.call(this);
        this._initial_x = 0.0;
        this._initial_y = 0.0;
        this._strength_x = 0.0;
        this._strength_y = 0.0;
    },

    initWithDuration:function (duration, strength_x, strength_y) {
        if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
            this._strength_x = strength_x;
            this._strength_y = strength_y;
            return true;
        }
        return false;
    },


    clone:function () {
        var action = new cc.Shake();
        action.initWithDuration(this._duration, this._strength_x, this._strength_y);
        return action;
    },

    update:function (time) {
        var randx = rangeRand( -this._strength_x, this._strength_x );
        var randy = rangeRand( -this._strength_y, this._strength_y );
        // move the target to a shaked position
        this._target.setPosition( cc.p( randx + this._initial_x, randy + this._initial_y    ) );
    },

    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._initial_x = target.getPosition().x;
        this._initial_y = target.getPosition().y;
    },
    stop:function(){
        this._target.setPosition( cc.p( this._initial_x, this._initial_y ) );
        cc.ActionInterval.prototype.stop.call(this);
    }


});

cc.Shake.create = function(duration, strength_x,strength_y){
    var action = new cc.Shake();
    action.initWithDuration(duration, strength_x,strength_y);
    return action;
};