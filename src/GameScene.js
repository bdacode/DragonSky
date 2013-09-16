/**
 * Created with JetBrains WebStorm.
 * User: robert
 * Date: 9/16/13
 * Time: 2:41 PM
 * To change this template use File | Settings | File Templates.
 */



var GameLayer = cc.Layer.extend({
    init : function(){

    }

});


GameLayer.create = function () {
    var sg = new GameLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

GameLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = GameLayer.create();
    scene.addChild(layer, 1);
    return scene;
};