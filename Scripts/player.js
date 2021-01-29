class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.score = 0;
        this.direction = 'right';

        this.image = new Image();
    }
    moveUp() {
        this.y--;
        this.direction = 'up';
    }  
    moveDown() {
        this.y++;
        this.direction = 'down';
    }
    moveLeft() {
        this.x--;
        this.direction = 'left';
    }
    moveRight() {
        this.x++;
        this.direction = 'right';
    }
    draw() {
        if(this.direction === 'left') {
            this.image.src = './Images/homerleft.png'
        } else if(this.direction === 'right') {
            this.image.src = './Images/homerright.png'
        } else if(this.direction === 'up') {
            this.image.src = './Images/homerup.png'
        } else if(this.direction === 'down') {
            this.image.src = './Images/homerdown.png'
        }

        context.drawImage(this.image, this.x * squareSize, this.y * squareSize, squareSize, squareSize);
    }
    checkCollision(obstacle) {
        if(this.x === obstacle.x && this.y === obstacle.y) {
            this.score += obstacle.points;
            obstacle.randomPosition()
        }
    }
}

const myPlayer = new Player();

document.addEventListener('keydown', (e) => {
    switch(e.keyCode) {
        case 38:
            if(myPlayer.y > 0) {
                myPlayer.moveUp();
            }
        break;
        case 40:
            if(myPlayer.y < 9) {
                myPlayer.moveDown();
            }

        break;
        case 37: 
        if(myPlayer.x > 0) {
            myPlayer.moveLeft();
        }

        break;
        case 39: 
        if(myPlayer.x < 9) {
            myPlayer.moveRight();
        }

        break;
    }
});