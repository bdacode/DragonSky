/**
 * Created with JetBrains WebStorm.
 * User: robert
 * Date: 9/20/13
 * Time: 11:39 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * 베이스 메뉴
 * 편대편성, 강화하기, 진화하기, 보관함
 * @type {Function}
 */
var BaseMenu = cc.Layer.extend({
    _titleSpr : null,
    _menu : null,

    init:function(){
        this._super();
        this.initTitle();
        this.initMenu();
    },

    initTitle:function(){
        this._titleSpr = DS.titleSprite.create("베이스");
        this.addChild(this._titleSpr);
    },
    initMenu : function(){
        this._menu = DS.createMenu(this,["팀편성","강화하기","진화하기","보관함"]);
        this.addChild(this._menu);
    },
    onPressMenu:function(){

    },
    onEnterTransitionDidFinish:function(){
        this._super();
    },
    onExit:function(){
        this._super();
    }
});

BaseMenu.create = function(){
    var layer = new BaseMenu();
    layer.init();
    return layer;
};



var BaseMultiplex = {
    _multiLayer : null,
    switchTo : function(n){
        cc.log(n);
        this._multiLayer.switchTo(n);
    }

};

BaseMultiplex.create = function(){
    var layer1 = BaseMenu.create();
    layer1.init();

    this._multiLayer = cc.LayerMultiplex.create(layer1);
    return this._multiLayer;
};