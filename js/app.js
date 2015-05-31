// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    //initialize new Enemy
    this.initialize();
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x = this.x + this.speed *dt;

    // 505 is the with of the canvase

    if (this.x > 505){
        this.initialize();
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}

//Initialize Enemy
Enemy.prototype.initialize = function() {
    //look for box sizes
    //
    this.x = -101;
    this.y = this.posy * 83 - 106 ;
    this.posy = Math.round(Math.random() *2 + 2);
    this.speed = 100;

}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-boy.png'
}
//Player update function
Player.prototype.update = function(){
    //grid postiton transformation
    this.x = this.posx * 101 - 101;
    this.y = this.posy * 83 - 92;
}
//Player render function
Player.prototype.render = function(){
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
//player handle input function - input is done via eventListener
Player.prototype.handleInput = function(input){
    // use grid for proper positioning
    switch(input) {
        case 'left':
            if (this.posx > 1)
                this.posx = this.posx - 1;
            break;
        case 'up':
            if (this.posy > 1)
                this.posy = this.posy - 1;
            break;
        case 'right':
            if (this.posx < 5)
                this.posx = this.posx + 1;
            break;
        case 'down':
            if (this.posy < 6)
                this.posy = this.posy + 1;
            break;
    }
}
//initialize Player
Player.prototype.initialize = function(){
    //base position for player in grid
    this.posx = 3;
    this.posy = 6;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
