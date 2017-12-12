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
                {type: 'box',x:1200,y:groundY-50},
                {type: 'enemy', x: 400, y: groundY-10},
                {type: 'enemy', x: 800, y: groundY-50},
                {type: 'enemy', x: 1200, y: groundY-100},
                {type: 'collectable', x: 1400, y: groundY-100}
            ]
        };

        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
        var myObstacle;
        
//sawblade :
            var createSawBlade = function(x,y) {
                var hitZoneSize = 25;
                var damageFromObstacle = 10;
                var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
                    myObstacle.x = x;
                    myObstacle.y = y;
                var obstacleImage = draw.bitmap('img/sawblade.png');
                    myObstacle.addChild(obstacleImage);
                    obstacleImage.x = -25;
                    obstacleImage.y = -25;
                    myObstacle.rotationVelocity = 100;
            
                game.addGameItem(myObstacle);
            };
            
            for (var gameIndex = 0; gameIndex <= levelData.gameItems.length-1; gameIndex++) {
                var gameItem = levelData.gameItems[gameIndex];
                
                if (gameItem.type === 'sawblade') {
                    createSawBlade(gameItem.x,gameItem.y);
                }
            }
        
//extra obstacle :
        var createBox = function(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 20;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
                myObstacle.x = x;
                myObstacle.y = y;
            var obstacleImage = draw.rect(50, 50, 'blue');
                myObstacle.addChild(obstacleImage);
                obstacleImage.x = -25;
                obstacleImage.y = -25;
                
            game.addGameItem(myObstacle);
        };
        
        if (gameItem.type === 'box') {
            createBox(gameItem.x,gameItem.y);
        }
                
//enemy :
        function createEnemy (x,y) {
            var enemy =  game.createGameItem('enemy',25);
                enemy.x = x;
                enemy.y = y;
                enemy.velocityX = -1;
            var redSquare = draw.rect(50,50,'red');
                redSquare.x = -25;
                redSquare.y = -25;
            enemy.addChild(redSquare);
                
            game.addGameItem(enemy);
            
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-10);
            };
            
            enemy.onProjectileCollision = function() {
                game.increaseScore(50);
                enemy.fadeOut();
            };
        }
        
        if (gameItem.type === 'enemy') {
            createEnemy(gameItem.x,gameItem.y);
        }
        
//collectable :
        function createCollectable (x,y) {
            var collectable = game.createGameItem('collectable', 16);
                collectable.x = x;
                collectable.y = y;
                collectable.velocityX = -1;
            var goldSquare = draw.rect(25, 25, 'yellow');
                goldSquare.x = -12;
                goldSquare.y = -12;
            collectable.addChild(goldSquare);
            
            game.addGameItem(collectable);
            
            collectable.onProjectileCollision = function() {
                game.increaseScore(100);
                collectable.fadeOut();
            };
        }
        
        if (gameItem.type === 'collectable') {
            createCollectable(gameItem.x,gameItem.y);
        }

    };
})(window);
