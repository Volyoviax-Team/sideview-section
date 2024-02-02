//core variables (variables with data on declare)
var screenState = sessionStorage.getItem("scene_state");
check_scene();

var clear = false;
//game variables (variables with their data being given to them in functions preload/setup/draw)
var screen;

var title;
var new_game;
var load_game;
var credits;

var svPlayer;
var svTiles;
var svTile1, svTile2;
var svMap;
var svmap0;
//game functions

function check_scene() {
    if(screenState === null) {
        screenState = "main_menu";
        sessionStorage.setItem("scene_state", screenState);
    }else {
        screenState = sessionStorage.getItem("scene_state");
    }
}

function setup() {
    screen = createCanvas(800,450);
    screen.position(0,0);

    if(screenState === "main_menu"){
        new p5(mainMenu);
    }else if(screenState === "side_view") {
        sv_setup();
        new p5(side_view);
    }else if(screenState === "player_menu") {
        pmSetup();
        new p5(playerMenu);
    }
}

function draw() {
    //background("black");

    if(screenState === "side_view") {
        sv_draw();
    }else if(screenState === "player_menu") {
        pmDraw();
    }
}

function game_clear(sketch) {
    //ONLY USE WHEN CHANGING SCENES
    sketch.remove();
}

function gameSwitch(newScene){
    sessionStorage.setItem("scene_state", newScene);
    screenState = newScene;
    clear = true;
    setup();
}