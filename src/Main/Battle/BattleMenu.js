/**
 * Created with JetBrains WebStorm.
 * User: robert
 * Date: 9/20/13
 * Time: 12:46 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * 전투 메뉴 레이어
 * 스토리, 스페셜, 랭킹모드, 도전모드(pvp 구현할지 모름)
 * @type {Function}
 */



var BattleMenu = cc.Layer.extend({
    _titleSpr : null,
    _menu : null,

    init:function(){
        this.initTitle();
        this.initMenu();
    },

    initTitle:function(){
        this._titleSpr = DS.titleSprite.create("전투");
        this.addChild(this._titleSpr);
    },
    initMenu : function(){
        this._menu = DS.createMenu(this,["일반모드","스페셜모드","랭킹모드","대전모드"]);
        this.addChild(this._menu);

    },
    onPressMenu:function(sender){
        //cc.log(sender);
        //cc.log(sender.getTag());
        BattleMultiplex.switchTo(sender.getTag()+1);  // 0 = BattleMenu
    },
    onEnterTransitionDidFinish:function(){
        this._super();
    },
    onExit:function(){
        this._super();
    }


});
var BattleMultiplex = {
    _multiLayer : null,
    switchTo : function(n){
        cc.log(n);
        this._multiLayer.switchTo(n);
    }

};

BattleMultiplex.create = function(){
    var layer1 = new BattleMenu();
    layer1.init();

    var layer2 = new NormalMenu();
    layer2.init();

    this._multiLayer = cc.LayerMultiplex.create(layer1,layer2);
    return this._multiLayer;
};

