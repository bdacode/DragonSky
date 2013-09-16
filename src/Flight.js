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


        // load image file from local file system to CCSpriteFrame, then add into CCAnimation
        for (int i = 1; i < 15; i++)
        {
            char szImageFileName[128] = {0};
            sprintf(szImageFileName, "Images/grossini_dance_%02d.png", i);
            animation->addSpriteFrameWithFileName(szImageFileName);
        }

        animation->setDelayPerUnit(2.8f / 14.0f); // This animation contains 14 frames, will continuous 2.8 seconds.
        animation->setRestoreOriginalFrame(true); // Return to the 1st frame after the 14th frame is played.

        CCAnimate *action = CCAnimate::create(animation);
        sprite->runAction(action);  // run action on sprite object

    }
});
