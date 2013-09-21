/**
 * Created with JetBrains WebStorm.
 * User: robert
 * Date: 9/20/13
 * Time: 12:46 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * 에그 메뉴 레이어
 * 우정에그, 레어에그
 * @type {Function}
 */
var EggMenu = cc.Layer.extend({
    _titleSpr : null,
    _menu : null,

    init:function(){
        this.initTitle();
        this.initMenu();
    },

    initTitle:function(){
        this._titleSpr = DS.titleSprite.create("에그");
        this.addChild(this._titleSpr);
    },
    initMenu : function(){
        this._menu = DS.createMenu(this,["우정에그","레어에그"]);
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

EggMenu.create = function(){
    var layer = new EggMenu();
    layer.init();
    return layer;
};

