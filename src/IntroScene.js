/**
 * Created with JetBrains WebStorm.
 * User: robert
 * Date: 9/16/13
 * Time: 2:42 PM
 * To change this template use File | Settings | File Templates.
 */


var IntroLayer = cc.Layer.extend({
    btnAbout : null,
    btnPlay : null,
    btnTest : null,

    init:function(){
        this._super();

        // 배경
        var backSpr = cc.Sprite.create(s_game_bg);
        backSpr.setPosition(VisibleRect.center());
        this.addChild(backSpr,-1);

        // 버튼
        this.btnAbout = cc.MenuItemImage.create(s_btn_about,s_btn_about_down,this.onPressAbout,this);
        this.btnPlay = cc.MenuItemImage.create(s_btn_play,s_btn_play_down,this.onPressPlay,this);
        this.btnTest = cc.MenuItemImage.create(s_btn_test_main,s_btn_test_main_down,function(){},this);

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
        this.btnPlay.runAction(cc.EaseElasticOut.create(cc.ScaleTo.create(1.0,1.0,1.0)));
        this.btnAbout.runAction(cc.EaseElasticOut.create(cc.ScaleTo.create(1.0,1.0,1.0)));
        this.btnTest.runAction(cc.EaseElasticOut.create(cc.ScaleTo.create(1.0,1.0,1.0)));
    },

    onPressPlay:function(){

    },
    onPressAbout:function(){

    }


});


var IntroScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new IntroLayer();
        layer.init();
        this.addChild(layer);
    }
})