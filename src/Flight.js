/**
 * Created with JetBrains WebStorm.
 * User: robert
 * Date: 9/16/13
 * Time: 4:04 PM
 * To change this template use File | Settings | File Templates.
 */


var Flight = cc.Sprite.extend({
    ctor:function () {
        this._super();

        //init life
        this.init(s_dragon_00);
       // this.setTag(0);
       // this.setPosition(0);


    },

    onEnterTransitionDidFinish:function(){

    }
});
