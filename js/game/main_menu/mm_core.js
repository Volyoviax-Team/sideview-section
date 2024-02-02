var mainMenu = function(sketch){
    sketch.setup = function() {
        let mm_screen = this.createCanvas(400,400);
        mm_screen.position(0,0);
    }

    sketch.draw = function() {
        this.background("black");
    }
};