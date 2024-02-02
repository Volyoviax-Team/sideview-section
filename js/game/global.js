//core variables (variables with data on declare)
var screenState = sessionStorage.getItem("scene_state");
check_scene();
//game variables (variables with their data being given to them in functions preload/setup/draw)
var screen;
//game functions

function check_scene() {
    if(screenState === null) {
        screenState = "main_menu";
        sessionStorage.setItem("screen_state", screenState);
    }else {
        screenState = sessionStorage.getItem("screen_state");
    }
}

function setup() {
    screen = createCanvas(800,450);
    screen.position(0,0);
}

function draw() {
    background("black");
}