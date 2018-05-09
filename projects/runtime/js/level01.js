(function (window) {
    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade', x:1000, y:groundY},
                {type: 'sawblade',x:1600,y:groundY},
                {type: 'sawblade',x:2400,y:groundY},
                {type: 'sawblade', x:3000, y:groundY},
                {type: 'sawblade',x:3600,y:groundY},
                {type: 'sawblade',x:4200,y:groundY},
                {type: 'box',x:2000,y:groundY-120},
                {type: 'box', x:3200, y:groundY-120},
                {type: 'box', x:6400, y:groundY-120},
                {type: 'box', x:8600, y:groundY-120},
                {type: 'enemy', x: 800, y: groundY-55},
                {type: 'enemy', x: 1600, y: groundY-55},
                {type: 'enemy', x: 2400, y: groundY-55},
                {type: 'collectable', x: 1400, y: groundY-120},
                {type: 'collectable', x: 1000, y: groundY-120},
                {type: 'collectable', x: 2000, y: groundY-120}
            ]
        };

        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
        var myObstacle;
        
//sawblade :
            var createSawBlade = function(x,y) {
                var hitZoneSize = 30;
                var damageFromObstacle = 10;
                var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
                    myObstacle.x = x;
                    myObstacle.y = y;
                var obstacleImage = draw.bitmap('img/spikes.png');
                    myObstacle.addChild(obstacleImage);
                    obstacleImage.x = -42;
                    obstacleImage.y = -38;
            
                game.addGameItem(myObstacle);
                
                myObstacle.onPlayerCollision = function() {
                    game.changeIntegrity(-10);
                    myObstacle.fadeOut();
                };
            };
            
            
        
//extra obstacle :
        var createBox = function(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
                myObstacle.x = x;
                myObstacle.y = y;
            var obstacleImage = draw.bitmap('img/ufo.png');
                myObstacle.addChild(obstacleImage);
                obstacleImage.x = -45;
                obstacleImage.y = -15;
                
            game.addGameItem(myObstacle);
            
            myObstacle.onPlayerCollision = function() {
                game.changeIntegrity(-20);
                myObstacle.fadeOut();
            };
        };
        
        
                
//enemy :
        function createEnemy (x,y) {
            var enemy =  game.createGameItem('enemy',30);
                enemy.x = x;
                enemy.y = y;
                enemy.velocityX = -1;
            var redSquare = draw.bitmap('img/alien.png');
                redSquare.x = -39;
                redSquare.y = -40;
            enemy.addChild(redSquare);
                
            game.addGameItem(enemy);
            
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-30);
                enemy.fadeOut();
            };
            
            enemy.onProjectileCollision = function() {
                game.increaseScore(50);
                enemy.fadeOut();
            };
        }
        
        
        
//collectable :
        function createCollectable (x,y) {
            var collectable = game.createGameItem('collectable', 16);
                collectable.x = x;
                collectable.y = y;
                collectable.velocityX = -1;
            var goldSquare = draw.bitmap('img/coin.png');
                goldSquare.x = -12;
                goldSquare.y = -12;
            collectable.addChild(goldSquare);
            
            game.addGameItem(collectable);
            
            collectable.onPlayerCollision = function() {
                game.increaseScore(100);
                game.changeIntegrity(+20);
                collectable.fadeOut();
            };
        }
        
        for (var gameIndex = 0; gameIndex <= levelData.gameItems.length-1; gameIndex++) {
            var gameItem = levelData.gameItems[gameIndex];
            
            if (gameItem.type === 'sawblade') {
                createSawBlade(gameItem.x,gameItem.y);
            } else if (gameItem.type === 'box') {
                createBox(gameItem.x,gameItem.y);
            } else if (gameItem.type === 'enemy') {
                createEnemy(gameItem.x,gameItem.y);
            } else if (gameItem.type === 'collectable') {
                createCollectable(gameItem.x,gameItem.y);
            }
        }

    };
})(window);
