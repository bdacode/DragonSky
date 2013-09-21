/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13. 9. 11
 * Time: 오후 2:14
 * To change this template use File | Settings | File Templates.
 */

cc.dumpConfig();

var IntroLayer = cc.Layer.extend({
    backSpr : null,
    btnAbout : null,
    btnPlay : null,
    btnTest : null,
    menu : null,

    init:function(){
        this._super();

        // 배경
        this.backSpr = cc.Sprite.create(s_game_bg);
        this.backSpr.setPosition(VisibleRect.center());
        this.addChild(this.backSpr,-1);

        // 버튼
        this.btnAbout = cc.MenuItemImage.create(s_btn_about,s_btn_about_down,this.onPressAbout,this);
        this.btnPlay = cc.MenuItemImage.create(s_btn_play,s_btn_play_down,this.onPressPlay,this);
        this.btnTest = cc.MenuItemImage.create(s_btn_test_main,s_btn_test_main_down,this.onPressMain,this);

        this.btnAbout.setScale(0);
        this.btnPlay.setScale(0);
        this.btnTest.setScale(0);
        this.menu = cc.Menu.create(this.btnAbout,this.btnPlay,this.btnTest);
        this.menu.setPosition(VisibleRect.center().add(0,-100));
        this.menu.alignItemsVerticallyWithPadding(screenHeight*0.15);
        this.addChild(this.menu,1);
    },

    onEnterTransitionDidFinish:function(){
        this._super();
//        this.logoSpr.runAction(cc.EaseBackOut.create(cc.ScaleTo.create(1.0,1.0,1.0)));
        this.btnPlay.runAction(cc.EaseElasticOut.create(cc.ScaleTo.create(1.0,1.0,1.0)));
        this.btnAbout.runAction(cc.EaseElasticOut.create(cc.ScaleTo.create(1.0,1.0,1.0)));
        this.btnTest.runAction(cc.EaseElasticOut.create(cc.ScaleTo.create(1.0,1.0,1.0)));

    },

    onPressPlay:function(){
        this.menu.setEnabled(false);
        cc.Loader.preload(g_game, function () {
            var scene = GameLayer.scene();
            cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
        }, this);


    },
    onPressAbout:function(){
        this.menu.setEnabled(false);
        var aboutLayer = new AboutLayer();
        aboutLayer.init();
        this.addChild(aboutLayer,10);
    },
    onPressMain:function(){
        this.menu.setEnabled(false);
        cc.Loader.preload(g_main, function () {
            var scene = MainScene.create();
            cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
        }, this);
    }
});

var IntroScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new IntroLayer();
        layer.init();
        this.addChild(layer);
    }
});


var AboutLayer = cc.Layer.extend({
    init:function(){
        this._super();
        var background = cc.Sprite.create(s_about_bg);
        background.setPosition(VisibleRect.center());
        this.addChild(background,-1);

        var btnDone = cc.MenuItemImage.create(s_btn_done,s_btn_done_down,this.onDone,this);
        var menu = cc.Menu.create(btnDone);
        menu.setPosition(background.getContentSize().width/2,0);
        background.addChild(menu,1);

        var text = cc.LabelTTF.create(
            s_About_Text,
            "Daum",10,cc.size(300,300),cc.TEXT_ALIGNMENT_CENTER,cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
        text.setColor(cc.c3b(0,0,0));
        text.setPosition(background.getContentSize().width/2,background.getContentSize().height/2);
        background.addChild(text,1);
    },

    onDone:function(){
        this.getParent().menu.setEnabled(true);
        this.removeFromParent(true);
    }


});

