/**
 *  Cocos2d-html5 show case : Moon Warriors
 *
 * @Licensed:
 * This showcase is licensed under GPL.
 *
 *  @Authors:
 *  Programmer: Shengxiang Chen (陈升想), Dingping Lv (吕定平), Ricardo Quesada
 *  Effects animation: Hao Wu (吴昊)
 *  Quality Assurance: Sean Lin (林顺)
 *
 *  @Links:
 *  http://www.cocos2d-x.org
 *  http://bbs.html5china.com
 *
 */


var DS = DS || {};

//game state
DS.GAME_STATE = {
    HOME:0,
    PLAY:1,
    OVER:2
};

//keys
DS.KEYS = [];

//level
DS.LEVEL = {
    STAGE1:1,
    STAGE2:2,
    STAGE3:3
};

//life
DS.LIFE = 4;

//score
DS.SCORE = 0;

//sound
DS.SOUND = true;

//enemy move type
DS.ENEMY_MOVE_TYPE = {
    ATTACK:0,
    VERTICAL:1,
    HORIZONTAL:2,
    OVERLAP:3
};

//delta x
DS.DELTA_X = -100;

//offset x
DS.OFFSET_X = -24;

//rot
DS.ROT = -5.625;

//bullet type
DS.BULLET_TYPE = {
    PLAYER:1,
    ENEMY:2
};

//weapon type
DS.WEAPON_TYPE = {
    ONE:1
};

//unit tag
DS.UNIT_TAG = {
    ENMEY_BULLET:900,
    PLAYER_BULLET:901,
    ENEMY:1000,
    PLAYER:1000
};

//attack mode
DS.ENEMY_ATTACK_MODE = {
    NORMAL:1,
    TSUIHIKIDAN:2
};

//life up sorce
DS.LIFEUP_SORCE = [50000, 100000, 150000, 200000, 250000, 300000];

//container
DS.CONTAINER = {
    ENEMIES:[],
    ENEMY_BULLETS:[],
    PLAYER_BULLETS:[],
    EXPLOSIONS:[],
    SPARKS:[],
    HITS:[],
    BACKSKYS:[],
    BACKTILEMAPS:[]
};

//bullet speed
DS.BULLET_SPEED = {
    ENEMY:-200,
    SHIP:900
};
// the counter of active enemies
DS.ACTIVE_ENEMIES = 0;

// navigation tag

DS.NAV_TAG = {
    BATTLE : 0,
    BASE : 1,
    EGG: 2,
    SHOP : 3,
    FRIEND : 4,
    ETC : 5
};