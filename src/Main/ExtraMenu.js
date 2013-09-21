/**
 * Created with JetBrains WebStorm.
 * User: robert
 * Date: 9/20/13
 * Time: 12:46 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * 기타 메뉴 레이어
 * 공지사항, 문의하기, 홈페이지, Credit
 * @type {Function}
 */
var ExtraMenu = cc.Layer.extend({
    _titleSpr : null,
    _menu : null,

    init:function(){
        this.initTitle();
        this.initMenu();
    },

    initTitle:function(){
        this._titleSpr = DS.titleSprite.create("기타");
        this.addChild(this._titleSpr);
    },
    initMenu : function(){
        this._menu = DS.createMenu(this,["공지사항","문의하기","홈페이지","Credit"]);
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

ExtraMenu.create = function(){
    var layer = new ExtraMenu();
    layer.init();
    return layer;
};


