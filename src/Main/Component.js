/**
 * Created with JetBrains WebStorm.
 * User: robert
 * Date: 9/21/13
 * Time: 1:47 AM
 * To change this template use File | Settings | File Templates.
 */

/**
 * 제목 스프라이트
 * @type {Function}
 */
DS.titleSprite = cc.Sprite.extend({
    _title : null,

    ctor : function(title){
        this._super();
        this._title = title;
        this.initWithFile(s_title_bg);

        var titleLbl = cc.LabelTTF.create(this._title,"Daum",15);
        titleLbl.setPosition(this.Center());
        this.addChild(titleLbl);
       // this.setScale(0);

        this.setPosition(-this._contentSize.width/2,screenHeight*0.85);
    },

    onEnterTransitionDidFinish : function(){
        this._super();
     //   this.runAction(cc.EaseElasticOut.create(cc.ScaleTo.create(1.0,1.0)));
        this.runAction(cc.MoveTo.create(0.3,cc.p(this._contentSize.width/2,screenHeight*0.85)));
    },

    onExit:function(){
        this._super();
     //   this.setScale(0);
        this.setPosition(-this._contentSize.width/2,screenHeight*0.85);
    }

});

DS.titleSprite.create = function(title){
    return new DS.titleSprite(title);
};

/**
 * 메뉴 만드는 함수
 * @param target
 * @param strAr
 * @returns {*}
 */
DS.createMenu = function(target, strAr){
    var itemAr = new Array(strAr.length);
    for(var i = 0 ; i < itemAr.length ; i ++){
        var item = cc.MenuItemImage.create(s_frame_normal,s_frame_select,target.onPressMenu,target);
        item.setTag(i);
        var label = cc.LabelTTF.create(strAr[i],"Daum",14);
        label.setPosition(item.Center());
        item.addChild(label);
        itemAr[i]=item;
    }
    var menu = DS.Menu.create(itemAr);
    return menu;
};

/**
 * 액션 적용된 메뉴
 * @type {Function}
 */
DS.Menu = cc.Menu.extend({
    ctor:function(itemAr){
        this._super();
        this.initWithArray(itemAr);
        this.alignItemsVertically();
        var childs = this.getChildren();
        for(var i = 0 ; i < childs.length ; i ++){
            childs[i].setScale(0);
        }
    },
    onEnterTransitionDidFinish : function(){
        this._super();
        var childs = this.getChildren();
        for(var i = 0 ; i < childs.length ; i ++){
            childs[i].runAction(cc.Sequence.create(
                cc.DelayTime.create(0.1*i),
                cc.EaseElasticOut.create(cc.ScaleTo.create(0.5,1.0),0.6))
            );
        }

    },

    onExit:function(){
        this._super();
        var childs = this.getChildren();
        for(var i = 0 ; i < childs.length ; i ++){
            childs[i].setScale(0);
        }
    }
});

DS.Menu.create = function(itemAr){
    return new DS.Menu(itemAr);
};