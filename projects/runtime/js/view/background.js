(function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        var backgroundBox;
        var building;
        var buildings = [];
        var bgmnt;
        var bgmnts = [];
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // TODO: 3 - YOUR DRAW CODE GOES HERE
            // you should modify this to suit your game
            
            var backgroundFill = draw.rect(canvasWidth,groundY,'#0F0029');
            background.addChild(backgroundFill);
            
            backgroundBox = draw.rect(100,100,'Blue');
            backgroundBox.x = 600;
            backgroundBox.y = 382;
            //background.addChild(backgroundBox);
            
            var grass = draw.rect(canvasWidth, groundY, '#19005A', '#0F0029', '3px');
            grass.y = groundY;
            background.addChild(grass);
            
            var bgmntHeight = 300;
            
            for(var i=0; i<=30; i++) {
                bgmnt = draw.bitmap('img/bgmtn.png');
                bgmnt.x = 225*i;
                bgmnt.y = groundY-(bgmntHeight+30);
                background.addChild(bgmnt);
                bgmnts.push(bgmnt);
            }
            
            var buildingHeight = 300;

            for(var i=0;i<=50;i++) {
                building = draw.bitmap('img/mtn.png');
                building.x = 225*i;
                building.y = groundY-(buildingHeight + 3);
                background.addChild(building);
                buildings.push(building);
            }
            
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            backgroundBox.x = backgroundBox.x - 1;
            if(backgroundBox.x < -100) {
                backgroundBox.x = canvasWidth;
            }
            
            for (var i = 0; i < bgmnts.length; i++) {
                bgmnt = bgmnts[i];
                bgmnt.x = bgmnt.x -0.5;
                if(bgmnt.x < -250) {
                    bgmnt.x = canvasWidth;
                }
            }
            
            for (var i = 0; i < buildings.length; i++) {
                building = buildings[i];
                building.x = building.x - 1;
                if(building.x < -250) {
                    building.x = canvasWidth;
                }
            }

        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
}(window));