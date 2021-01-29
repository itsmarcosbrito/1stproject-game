const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let toggleSound = false;
const startButton = document.getElementById('start-button');

const themeSong = new Audio('./Images/audio1.mp4');

startButton.addEventListener('click', () => {
    const intro = document.getElementById('game-intro');
    intro.setAttribute('class', 'hidden')
    const gameBoard = document.getElementById('game-board');
    gameBoard.classList.remove('hidden');
    gameArea.start();
    themeSong.play();
})

const muteButton = document.getElementById('mute-sound');
muteButton.addEventListener('click', () => {
    toggleSound = !toggleSound;
    
    themeSong.muted = toggleSound;
    if (themeSong.muted) {
        muteButton.innerText = "Unmute";
    } else {
        muteButton.innerText = "Mute";
    }
})

const width = canvas.width;
const height = canvas.height;
const squares = 10;
const squareSize = width / squares;

const gameArea = {
    frames: 0,
    timer: 30,
    start: function() {
        this.interval = setInterval(updateGameArena, 20);
        gameArea.countDown();
    },
    stop: function() {
        themeSong.pause();
        clearInterval(this.interval);
    },
    clear: function() {
        context.clearRect(0, 0, canvas.width, canvas.height)
    },
    displayScore: function() {
        const score = document.getElementById('score');
        score.innerText = myPlayer.score;
    },
    countDown: function () {
        const timerSpan = document.getElementById('sec');
            setTimeout(() => {
                if(this.timer > 0) {
                    this.timer--;
                    gameArea.countDown()
                }
            }, 1000)
        timerSpan.innerText = this.timer;

    },
    checkTimer: function() {
        if(this.timer === 0) {
            context.font = '30px Arial';
            context.fillText('Game Over', 10, 50);
            this.stop();
            document.getElementById('game-board').style.display = 'none';
            document.getElementById('game-over').style.display = 'block';

        }
    },
    drawGrid: function() {
        const backgroundImage = new Image();
        backgroundImage.src = './Images/maze.jpg';
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        context.lineWidth = 1;

        for(let x = 0; x <= height; x += squareSize) {
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x, height);
            context.stroke()
        }
        for(let y = 0; y <= width; y += squareSize) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(width, y);
            context.stroke()
        }
    }
}

function updateGameArena() {
    gameArea.clear();
    gameArea.drawGrid();
    myPlayer.draw();
    newBeer.draw();
    newDonut.draw();
    newDonut2.draw();
    newDonut3.draw();
    newDonut4.draw();
    newSalad.draw();
    newPig.draw();
    myPlayer.checkCollision(newBeer);
    myPlayer.checkCollision(newDonut);
    myPlayer.checkCollision(newDonut2);
    myPlayer.checkCollision(newDonut3);
    myPlayer.checkCollision(newDonut4);
    myPlayer.checkCollision(newSalad);
    myPlayer.checkCollision(newPig);
    gameArea.displayScore();
    gameArea.checkTimer();
}



