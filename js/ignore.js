// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';
    this.x = -100 ;
    this.y = y ;
    this.speed = Math.floor(Math.random() * Math.floor(200)) + 30
    // console.log(this.speed)
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x = this.x + (this.speed * dt) ;
    // console.log(this.x)
    
    // if (this.x > 800) {
    //     let index = allEnemies.findIndex(x => x == this)
    //     console.log(index)
    //     allEnemies.slice(index, 1)
    // }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player{
    constructor(){
        this.x = 101 ;
        this.y = 101 ;
        this.sprite = "images/char-boy.png"
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
    }

    update(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
    }

    handleInput(key){

        switch(key){
            case "up":
                // this.y -= 90;
                if (this.y-90 > 0){
                    this.y -= 90;
                }
                break;
            case "down": 
                console.log("downnn");
                break;
            case "left":
                console.log("leftt");
                break;
            case "right":
                console.log("righttt")
                break;
        }
    }
}

// Now instantiate your objects.
let yCord = [60, 145, 230]

enemy1 = new Enemy(0, yCord[Math.floor(Math.random() * Math.floor(4))]);
enemy2 = new Enemy(0, yCord[Math.floor(Math.random() * Math.floor(4))]);
enemy3 = new Enemy(0, yCord[Math.floor(Math.random() * Math.floor(4))]);
enemy4 = new Enemy(0, yCord[Math.floor(Math.random() * Math.floor(4))]);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3, enemy4]

// Place the player object in a variable called player
var player = new Player()

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

// TODO : Generate enemies function
// TODO : Delete enemies
