/**
 * Created with JetBrains WebStorm.
 * User: robert
 * Date: 9/20/13
 * Time: 12:46 PM
 * To change this template use File | Settings | File Templates.
 */

var BattleLayer = cc.Layer.extend({
    _title : null,

    init:function(){
        this._title = cc.LabelTTF.create("전투","Daum",12);
        this._title.setAnchorPoint(Anchor.TopLeft);
        this._title.setPosition(0,screenHeight*0.9);
        this.addChild(this._title);


    }
});

var MainLayer = cc.LayerMultiplex.extend({
    ctor:function(){
        this._super();
        var layer = new BattleLayer();
        layer.init();
        this.initWithLayers([layer]);
    },

    init : function(){
        this._super();
        this.initBackground();

    },

    /**
     * 배경 그림 초기화
     */
    initBackground : function(){

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