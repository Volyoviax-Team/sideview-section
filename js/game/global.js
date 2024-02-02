//core variables (variables with data on declare)
var screenState = sessionStorage.getItem("scene_state");
check_scene();
//game variables (variables with their data being given to them in functions preload/setup/draw)
var screen;

var title;
var new_game;
var load_game;
var credits;

var svPlayer;
//game functions

function check_scene() {
    if(screenState === null) {
        screenState = "side_view";
        sessionStorage.setItem("screen_state", screenState);
    }else {
        screenState = sessionStorage.getItem("screen_state");
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
    }
}

function draw() {
    //background("black");

    if(screenState === "side_view") {
        sv_draw();
    }
}