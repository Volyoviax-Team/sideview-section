var mainMenu = function(sketch){
    sketch.setup = function() {
        let mmScreen = this.createCanvas(800,450);
        mmScreen.position(0,0);

        title = new this.Sprite(400,100,120,50);
        title.text = 'Volyoviax: Requiem';
        title.color = 'purple'

        new_game = new this.Sprite(300,225,100,50);
        new_game.text = 'New Game';
        new_game.color = 'blue';

        load_game = new this.Sprite(500,225,100,50);
        load_game.text = 'Load Game';
        load_game.color = 'blue';

        credits = new this.Sprite(400,425,100,25);
        credits.text = 'credits';
        credits.color = 'red';
    }

    sketch.draw = function() {
        this.background("black");

        if(new_game.mouse.hovering()) {
            new_game.stroke = 'yellow';
        }else {
            new_game.stroke = 'black';
        }

        if(load_game.mouse.hovering()) {
            load_game.stroke = 'yellow';
        }else {
            load_game.stroke = 'black';
        }

        if(credits.mouse.hovering()) {
            credits.stroke = 'yellow';
        }else {
            credits.stroke = 'black';
        }
    }
};