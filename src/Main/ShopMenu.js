/**
 * Created with JetBrains WebStorm.
 * User: robert
 * Date: 9/20/13
 * Time: 12:46 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * 상점 메뉴 레이어
 * 크리스탈 구입, 스태미나 회복
 * @type {Function}
 */
var ShopMenu = cc.Layer.extend({
    _titleSpr : null,
    _menu : null,

    init:function(){
        this._super();
        this.initTitle();
        this.initMenu();
    },

    initTitle:function(){
        this._titleSpr = DS.titleSprite.create("상점");
        this.addChild(this._titleSpr);
    },
    initMenu : function(){
        this._menu = DS.createMenu(this,["크리스탈 구입","스태미나 회복"]);
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

ShopMenu.create = function(){
    var layer = new ShopMenu();
    layer.init();
    return layer;
};


