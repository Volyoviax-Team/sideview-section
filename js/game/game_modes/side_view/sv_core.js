var side_view = function(sketch) {
    sketch.setup = function() {
        let svScreen = this.createCanvas(800, 450);
        svScreen.position(0,0);

        this.world.gravity.y = 20;

        svPlayer = new this.Sprite(400,225,50,50);

        svMap = sessionStorage.getItem("sv_map");

        if(svMap === null) {
            svMap = 'map_0';
            sessionStorage.setItem("sv_map", svMap);
        }else {
            svMap = sessionStorage.getItem("sv_map");
        }

        svTiles = new this.Group();
        svTiles.width = 50;
        svTiles.height = 50;
        svTiles.collider = 's';

        svTile1 = new svTiles.Group();
        svTile1.color = 'red';
        svTile1.tile = 'r';

        svTile2 = new svTiles.Group();
        svTile2.color = 'green';
        svTile2.tile = 'g';

        sv_maps(sketch);

        this.allSprites.rotationLock = true;
    }

    sketch.draw = function() {
        this.background("black");

        this.camera.x = svPlayer.x;
        this.camera.y = svPlayer.y;
    }
}

function sv_setup() {

}

function sv_draw() {
    sv_playerMovement();
}