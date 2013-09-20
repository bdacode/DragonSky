/**
 * Created with JetBrains WebStorm.
 * User: robert
 * Date: 9/18/13
 * Time: 12:33 PM
 * To change this template use File | Settings | File Templates.
 */

STATE_PLAYING = 0;
STATE_GAMEOVER = 1;
MAX_CONTAINT_WIDTH = 40;
MAX_CONTAINT_HEIGHT = 40;

var g_sharedGameLayer;

var GameLayer = cc.Layer.extend({
    _time : null,
    _ship : null,
    _state : STATE_PLAYING,
    _tmpScore : 0,
    lbScore : null, lbGold : null, lbEgg : null, lbDistance : null,


    init:function(){
        this._super();

        cc.SpriteFrameCache.getInstance().addSpriteFrames(s_textureOpaquePack_plist);
        cc.SpriteFrameCache.getInstance().addSpriteFrames(s_b01_plist);
        cc.SpriteFrameCache.getInstance().addSpriteFrames(s_textureTransparentPack_plist);

        // reset global values
        DS.CONTAINER.ENEMIES = [];
        DS.CONTAINER.ENEMY_BULLETS = [];
        DS.CONTAINER.PLAYER_BULLETS = [];
        DS.CONTAINER.EXPLOSIONS = [];
        DS.CONTAINER.SPARKS = [];
        DS.CONTAINER.HITS = [];
        DS.CONTAINER.BACKSKYS = [];
        DS.CONTAINER.BACKTILEMAPS = [];
        DS.ACTIVE_ENEMIES = 0;

        DS.SCORE = 0;
        DS.LIFE = 4;
        this._state = STATE_PLAYING;

        this.initHud();
        this.initTouch();
        this.initBackground();

        // Todo : Life 표기

        // 주인공 비행기
        this._ship = new Ship();
        this.addChild(this._ship,this._ship.zOrder,DS.UNIT_TAG.PLAYER);




        // schedule
        this.scheduleUpdate();
        this.schedule(this.onScoreUpdate,1);

        if(DS.SOUND){
            // 배경음악 재생
        }

        g_sharedGameLayer = this;

    },

    onTouchesMoved:function (touches, event) {
        this.processEvent(touches[0]);
    },

    onMouseDragged:function (event) {
        this.processEvent(event);
    },

    processEvent:function (event) {
        if (this._state == STATE_PLAYING) {
            var delta = event.getDelta().x;
            var curPos = this._ship.getPosition().x;
            curPos = delta + curPos;
            curPos = cc.clampf(curPos,0,screenWidth);
            this._ship.setPosition(curPos,this._ship.getPosition().y);
        }
    },

    onKeyDown:function (e) {
        DS.KEYS[e] = true;
    },

    onKeyUp:function (e) {
        DS.KEYS[e] = false;
    },


    onScoreUpdate : function(dt){

    },


    update:function(dt){
        if (this._state == STATE_PLAYING) {
            this.checkIsCollide();
            this.removeInactiveUnit(dt);
            this.checkIsReborn();
            this.updateUI();
        }
    },
    checkIsCollide:function () {
        var selChild, bulletChild;
        // check collide
        var i = 0;
        for (i = 0; i < DS.CONTAINER.ENEMIES.length; i++) {
            selChild = DS.CONTAINER.ENEMIES[i];
            if (!selChild.active)
                continue;

            for (var j = 0; j < DS.CONTAINER.PLAYER_BULLETS.length; j++) {
                bulletChild = DS.CONTAINER.PLAYER_BULLETS[j];
                if (bulletChild.active && this.collide(selChild, bulletChild)) {
                    bulletChild.hurt();
                    selChild.hurt();
                }
            }
            if (this.collide(selChild, this._ship)) {
                if (this._ship.active) {
                    selChild.hurt();
                    this._ship.hurt();
                }
            }
        }

        for (i = 0; i < DS.CONTAINER.ENEMY_BULLETS.length; i++) {
            selChild = DS.CONTAINER.ENEMY_BULLETS[i];
            if (selChild.active && this.collide(selChild, this._ship)) {
                if (this._ship.active) {
                    selChild.hurt();
                    this._ship.hurt();
                }
            }
        }
    },
    removeInactiveUnit:function (dt) {
        var selChild, children = this.getChildren();
        for (var i in children) {
            selChild = children[i];
            if (selChild && selChild.active) {
                selChild.update(dt);
            }
        }

//        var selChild, children = this.getChildren();
//        for (var i in children) {
//            selChild = children[i];
//            if (selChild && selChild.active) {
//                selChild.update(dt);
//            }
//        }


    },
    checkIsReborn:function () {
        if (DS.LIFE > 0 && !this._ship.active) {
            this._ship.born();
        }
        else if (DS.LIFE <= 0 && !this._ship.active) {
            this._state = STATE_GAMEOVER;
            // XXX: needed for JS bindings.
            this._ship = null;
            this.runAction(cc.Sequence.create(
                cc.DelayTime.create(0.2),
                cc.CallFunc.create(this.onGameOver, this)));
        }
    },
    updateUI:function () {
        if (this._tmpScore < DS.SCORE) {
            this._tmpScore += 5;
        }
      //  this._lbLife.setString(DS.LIFE + '');
      //  this.lbScore.setString("Score: " + this._tmpScore);
    },

    initHud : function(){
        // 획득 골드 표기 레이블
        this.lbGold = cc.LabelTTF.create("Gold : 0", "Daum",12);
        this.lbGold.setAnchorPoint(Anchor.BottomLeft); // 좌측 아래
        this.lbGold.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
        this.addChild(this.lbGold, 1000);
        this.lbGold.setPosition(5,screenHeight-30);

        // Distance
        this.lbDistance = cc.LabelTTF.create("0 M", "Daum", 12);
        this.lbDistance.setAnchorPoint(Anchor.Bottom); // 우측 아래
        this.lbDistance.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(this.lbDistance, 1000);
        this.lbDistance.setPosition(screenWidth/2 ,screenHeight - 30);

        // Score == exp
        this.lbScore = cc.LabelBMFont.create("Score : 0", s_arial14_fnt);
        this.lbScore.setAnchorPoint(Anchor.BottomRight); // 오른쪽 아래로 앵커
        this.lbScore.setAlignment(cc.TEXT_ALIGNMENT_RIGHT);
        this.addChild(this.lbScore, 1000);
        this.lbScore.setPosition(screenWidth - 5, screenHeight - 30);

        // 획득 에그 표기 레이블
        this.lbEgg = cc.LabelTTF.create("Egg : 0", "Daum",12);
        this.lbEgg.setAnchorPoint(Anchor.BottomRight); // 우측 아래
        this.lbEgg.setHorizontalAlignment(cc.TEXT_ALIGNMENT_RIGHT);
        this.addChild(this.lbEgg, 1000);
        this.lbEgg.setPosition(screenWidth - 5 ,screenHeight - 42);


    },
    initTouch:function(){
        // accept touch now!

        if (sys["capabilities"].hasOwnProperty('keyboard'))
            this.setKeyboardEnabled(true);

        if (sys["capabilities"].hasOwnProperty('mouse'))
        /*if ('mouse' in sys.capabilities)*/
            this.setMouseEnabled(true);

        if (sys["capabilities"].hasOwnProperty('touches'))
        /*if ('touches' in sys.capabilities)*/
            this.setTouchEnabled(true);
    },
    initBackground:function () {
       // this._backSky = BackSky.getOrCreate();
       // this._backSkyHeight = this._backSky.getContentSize().height;

       // this.movingBackground();
       // this.schedule(this.movingBackground, 3);

       //  this.moveTileMap();
       //  this.schedule(this.moveTileMap, 5);
    }

});

GameLayer.create = function () {
    var sg = new GameLayer();
    sg.init();
    return sg;
};

GameLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = GameLayer.create();
    scene.addChild(layer, 1);
    return scene;
};