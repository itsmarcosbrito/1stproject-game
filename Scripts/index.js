const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
// const intro = document.getElementById('game-intro');
// intro.style.display = 'none';

const width = canvas.width;
const height = canvas.height;

const background = new Image();
background.src = "./Images/maze.png"

const gameArea = {
    frames: 0,
    start: function() {
        this.interval = setInterval(updateGameArena, 20);
    },
    stop: function() {
        clearInterval(this.interval);
    },
    clear: function() {
        context.clearRect(0, 0, canvas.width, canvas.height)
    },
    drawBackground: function() {
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
    }
}

function updateGameArena() {
    gameArea.clear();
    gameArea.drawBackground();
    myPlayer.draw();

}


class Player {
    constructor() {
        this.x = 25;
        this.y = 25;

        const image = new Image();
        image.src = "./Images/PacMan.png";
        image.addEventListener('load', () => {
            this.image = image;
            this.draw();
        });
    }

    moveUp() {
        this.y -= 25;
    }

    moveDown() {
        this.y += 25;
    }

    moveLeft() {
        this.x -= 25;
    }

    moveRight() {
        this.x += 25;
    }

    draw() {
        context.drawImage(this.image, this.x, this.y, 35, 35);
    }
}

const myPlayer = new Player();

document.addEventListener('keydown', (e) => {
    switch(e.keyCode) {
        case 38: 
            myPlayer.moveUp();
        break;
        case 40: 
        myPlayer.moveDown();
        break;
        case 37: 
        myPlayer.moveLeft();
        break;
        case 39: 
        myPlayer.moveRight();
        break;
    }
    // context.clearRect(0, 0, canvas.width, canvas.height);
    // myPlayer.draw();
});

gameArea.start();