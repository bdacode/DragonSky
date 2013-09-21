/**
 * Created with JetBrains WebStorm.
 * User: robert
 * Date: 9/20/13
 * Time: 12:46 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * 전투, 베이스, 에그, 상점, 친구, 기타
 * @type {Function}
 */


var MainLayer = cc.Layer.extend({
    _multiLayer : null,
    _navMenu : null,

    ctor:function(){
        this._super();
        var layer1 = BattleMultiplex.create();
        var layer2 = BaseMultiplex.create();
        var layer3 = EggMenu.create();
        var layer4 = ShopMenu.create();
        var layer5 = FriendMenu.create();
        var layer6 = ExtraMenu.create();

        this._multiLayer = cc.LayerMultiplex.create(layer1,layer2,layer3,layer4,layer5,layer6);
        this.addChild(this._multiLayer);
    },

    init : function(){
        this._super();
        this.initBackground();
        this.initNavMenu();
        this.initHud();

    },

    /**
     * 배경 그림 초기화
     */
    initBackground : function(){
        var bg = cc.Sprite.create(s_main_bg);
        this.addChild(bg,-1);
        bg.setPosition(screenWidth/2,screenHeight/2);
    },
    /**
     * 네비게이션 메뉴 초기화
     */
    initNavMenu : function(){
        // 전투, 베이스, 에그, 상점, 친구, 기타
        var normalAr = [s_nav_clock_normal,     s_nav_box_normal,   s_nav_human_normal,     s_nav_door_normal,      s_nav_human_normal,     s_nav_mail_normal];
        var selectAr = [s_nav_clock_selected,   s_nav_box_selected, s_nav_human_selected,   s_nav_door_selected,    s_nav_human_selected,   s_nav_mail_selected];
        var strAr = ["전투","베이스","에그","상점","친구","기타"];
        var itemAr = new Array(6);
        for(var i = 0; i < itemAr.length ; i ++){
            var item = cc.MenuItemImage.create(normalAr[i], selectAr[i],this.onPressNav,this);
            item.setTag(i);
            var label = cc.LabelTTF.create(strAr[i],"Daum",12);
            label.setPosition(item.getContentSize().width/2,-5);
            item.addChild(label,1);
            itemAr[i]=item;
        }
        this._navMenu = cc.Menu.create(itemAr);
        this._navMenu.alignItemsHorizontally();
        this._navMenu.setPosition(screenWidth/2,screenHeight*0.08);
        this.addChild(this._navMenu,1);
    },
    /**
     * 유저정보 HUD 초기화
     * 유저이름, 레벨, 스태미나, 스태미나 회복 시간, 골드, 크리스탈,
     */
    initHud : function(){
        var nameLbl         = cc.LabelTTF.create("이름 : 없음","Daum", 12);
        var levelLbl        = cc.LabelTTF.create("레벨 : 0", "Daum", 12);
        var expLbl          = cc.LabelTTF.create("경험치 0/0","Daum",12);
        var staminaLbl      = cc.LabelTTF.create("스태미나 0/0", "Daum", 12);
        var staminaTiimeLbl = cc.LabelTTF.create("00:00","Daum",12);
        var goldLbl         = cc.LabelTTF.create("골드 : 0", "Daum", 12);
        var crystalLbl      = cc.LabelTTF.create("크리스탈 : 0", "Daum", 12);

        nameLbl         .setAnchorPoint(Anchor.Left);
        levelLbl        .setAnchorPoint(Anchor.Left);
        expLbl          .setAnchorPoint(Anchor.Left);
        staminaLbl      .setAnchorPoint(Anchor.Left);
        staminaTiimeLbl .setAnchorPoint(Anchor.Left);
        goldLbl         .setAnchorPoint(Anchor.Left);
        crystalLbl      .setAnchorPoint(Anchor.Left);

        nameLbl.setPosition(10,screenHeight*0.95);
        levelLbl.setPosition(120,screenHeight*0.95);
        expLbl.setPosition(240,screenHeight*0.95);
        staminaLbl.setPosition(10,screenHeight*0.90);
        staminaTiimeLbl.setPosition(100,screenHeight*0.90);
        goldLbl.setPosition(180,screenHeight*0.90);
        crystalLbl.setPosition(240,screenHeight*0.90);

        this.addChild(nameLbl);
        this.addChild(levelLbl);
        this.addChild(expLbl);
        this.addChild(staminaLbl);
        this.addChild(staminaTiimeLbl);
        this.addChild(goldLbl);
        this.addChild(crystalLbl);

    },
    onPressNav:function(sender){
        var tag = sender.getTag();
        this._multiLayer.switchTo(tag);
//        switch(tag){
//            case DS.NAV_TAG.BATTLE:
//                break;
//            case DS.NAV_TAG.BASE:
//                break;
//            case DS.NAV_TAG.EGG:
//                break;
//            case DS.NAV_TAG.SHOP:
//                break;
//            case DS.NAV_TAG.FRIEND:
//                break;
//            case DS.NAV_TAG.ETC:
//                break;
//        }
    }
});


var MainScene = cc.Scene.extend({
    init : function(){
        this._super();
        var layer = new MainLayer();
        layer.init();
        this.addChild(layer,0);
    }
})

MainScene.create = function(){
    var scene = new MainScene();
    scene.init();
    return scene;
}


