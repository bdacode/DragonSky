/**
 * Created with JetBrains WebStorm.
 * User: robert
 * Date: 9/21/13
 * Time: 1:03 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * Created with JetBrains WebStorm.
 * User: robert
 * Date: 9/20/13
 * Time: 12:46 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * 일반 메뉴 레이어
 *
 * @type {Function}
 */
var NormalMenu = cc.Layer.extend({
    _titleSpr : null,
    _menu : null,

    init:function(){
        this.initTitle();
        this.initMenu();
    },

    initTitle:function(){
        this._titleSpr = DS.titleSprite.create("일반모드");
        this.addChild(this._titleSpr);
    },
    initMenu : function(){
        this._menu = DS.createMenu(this,["1234","가나다라","테스트3","테스트4"]);
        this.addChild(this._menu);

        var label = cc.LabelTTF.create("뒤로",f_daum,12);
        var backBtn = cc.MenuItemLabel.create(label,this.onPressBack,this);
        var menu = cc.Menu.create(backBtn);
        this._titleSpr.addChild(menu);
        menu.setPosition(
            this._titleSpr.getContentSize().width/2,
            -this._titleSpr.getContentSize().height/2 - label.getContentSize().height/2 );

    },
    onPressMenu:function(){

    },
    onPressBack:function(){
        BattleMultiplex.switchTo(0);
    },

    onEnterTransitionDidFinish:function(){
        this._super();
    },
    onExit:function(){
        this._super();
    }


});

NormalMenu.create = function(){
    var layer = new NormalMenu();
    layer.init();
    return layer;
};


