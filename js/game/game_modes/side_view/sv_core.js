var side_view = function(sketch) {
    sketch.setup = function() {
        let svScreen = this.createCanvas(800, 450);
        svScreen.position(0,0);

        svPlayer = new this.Sprite(400,225,50,50);
    }

    sketch.draw = function() {
        this.background("black");
    }
}

function sv_setup() {

}

function sv_draw() {
    sv_playerMovement();
}