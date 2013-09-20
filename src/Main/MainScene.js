/**
 * Created with JetBrains WebStorm.
 * User: robert
 * Date: 9/20/13
 * Time: 12:46 PM
 * To change this template use File | Settings | File Templates.
 */

var MainLayer = cc.Layer.extend({

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