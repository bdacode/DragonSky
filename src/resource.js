var dirImg = "Moon/";
var dirMusic = "res/Music/";

//image
var s_loading = dirImg + "loading.png";
var s_menu = dirImg + "menu.png";
var s_logo = dirImg + "logo.png";
var s_b01 = dirImg + "b01.png";
var s_b01_plist = dirImg + "b01.plist";
var s_cocos2dhtml5 = dirImg + "cocos2d-html5.png";
var s_gameOver = dirImg + "gameOver.png";
var s_menuTitle = dirImg + "menuTitle.png";
var s_flare = dirImg + "flare.jpg";
var s_explosion = dirImg + "explosion.png";
var s_arial14 = dirImg + "arial-14.png";
var s_arial14_fnt = dirImg + "arial-14.fnt";
var s_textureOpaquePack = dirImg + "textureOpaquePack.png";
var s_textureTransparentPack = dirImg + "textureTransparentPack.png";

//music
var s_bgMusic_mp3 = dirMusic + "bgMusic.mp3";
var s_mainMainMusic_mp3 = dirMusic + "mainMainMusic.mp3";

//effect
var s_buttonEffect_mp3 = dirMusic + "buttonEffet.mp3";
var s_explodeEffect_mp3 = dirMusic + "explodeEffect.mp3";
var s_fireEffect_mp3 = dirMusic + "fireEffect.mp3";
var s_shipDestroyEffect_mp3 = dirMusic + "shipDestroyEffect.mp3";

var s_bgMusic_ogg = dirMusic + "bgMusic.ogg";
var s_mainMainMusic_ogg = dirMusic + "mainMainMusic.ogg";

//effect
var s_buttonEffect_ogg = dirMusic + "buttonEffet.ogg";
var s_explodeEffect_ogg = dirMusic + "explodeEffect.ogg";
var s_fireEffect_ogg = dirMusic + "fireEffect.ogg";
var s_shipDestroyEffect_ogg = dirMusic + "shipDestroyEffect.ogg";

//tmx
var s_level01 = dirImg + "level01.tmx";

//plist
var s_explosion_plist = dirImg + "explosion.plist";
var s_textureOpaquePack_plist = dirImg + "textureOpaquePack.plist";
var s_textureTransparentPack_plist = dirImg + "textureTransparentPack.plist";


// Intro
var s_game_bg = "img/game-bg.png";
var s_logo = "img/logo.png";
var s_btn_about = "img/btn-about.png";
var s_btn_about_down ="img/btn-about-down.png";
var s_btn_play = "img/btn-play.png";
var s_btn_play_down = "img/btn-play-down.png";
var s_about_bg = "img/about-bg.png";
var s_btn_done = "img/btn-done.png";
var s_btn_done_down = "img/btn-done-down.png";
var s_btn_test_main = "img/btn-test-main.png";
var s_btn_test_main_down = "img/btn-test-main-down.png";


var g_mainscene = [

];
var g_intro  = [
    {src:s_game_bg},
    {src:s_btn_about},
    {src:s_btn_about_down},
    {src:s_btn_play},
    {src:s_btn_play_down},
    {src:s_about_bg},
    {src:s_btn_done},
    {src:s_btn_done_down},
    {src:s_btn_test_main},
    {src:s_btn_test_main_down},
];


var g_mainmenu = [
    {src:s_loading},
    {src:s_flare},
    {src:s_menu},
    {src:s_logo},
    {src:s_flare},
	{src:s_mainMainMusic_mp3},
    {src:s_mainMainMusic_ogg},
    {src:s_menuTitle}

];

var g_maingame = [
    //image

    {src:s_cocos2dhtml5},
    {src:s_gameOver},
    {src:s_arial14},
    {src:s_explosion},

    {src:s_b01},
    {src:s_b01_plist},


    //tmx
   // {src:s_level01},

    //plist
    {src:s_explosion_plist},

    {src:s_textureOpaquePack},
    {src:s_textureOpaquePack_plist},

    {src:s_textureTransparentPack},
    {src:s_textureTransparentPack_plist},


    //music
    {src:s_bgMusic_mp3},
    {src:s_bgMusic_ogg},

    //effect
    {src:s_buttonEffect_mp3},
    {src:s_explodeEffect_mp3},
    {src:s_fireEffect_mp3},
    {src:s_shipDestroyEffect_mp3},
    {src:s_buttonEffect_ogg},
    {src:s_explodeEffect_ogg},
    {src:s_fireEffect_ogg},
    {src:s_shipDestroyEffect_ogg},

    // FNT
    {src:s_arial14_fnt}
];

var g_fonts = [
    {fontName:"Daum",
        src:[
            //{src:"fonts/Daum_Regular.eot",type:"embedded-opentype"},
            {src:"fonts/Daum_Regular.ttf",type:"truetype"}]
    },
    {fontName:"DaumBold",
        src:[
            //{src:"fonts/Daum_SemiBold.eot",type:"opentype"},
            {src:"fonts/Daum_SemiBold.ttf",type:"truetype"}]
    }
];
