
class Beer {
    constructor() {
        this.randomPosition();
        this.points = 50;

        const image = new Image();
        image.src = "./Images/beerbg.png";
        image.addEventListener('load', () => {
            this.image = image;
            this.draw();
        });
    }
    draw() {
        context.drawImage(this.image, this.x * squareSize, this.y * squareSize, squareSize, squareSize);
    }
    randomPosition() {
        this.x = Math.floor(Math.random() * squares);
        this.y = Math.floor(Math.random() * squares);
    }
}

class Donut1 {
    constructor() {
        this.randomPosition();
        this.points = 5;


        const image = new Image();
        image.src = "./Images/donut1-.png";
        image.addEventListener('load', () => {
            this.image = image;
            this.draw();
        });
    }
    draw() {
        context.drawImage(this.image, this.x * squareSize, this.y * squareSize, squareSize, squareSize);
    }
    randomPosition() {
        this.x = Math.floor(Math.random() * squares);
        this.y = Math.floor(Math.random() * squares);
    }
}

class Donut2 {
    constructor() {
        this.randomPosition();
        this.points = 10;


        const image = new Image();
        image.src = "./Images/donut2-.png";
        image.addEventListener('load', () => {
            this.image = image;
            this.draw();
        });
    }
    draw() {
        context.drawImage(this.image, this.x * squareSize, this.y * squareSize, squareSize, squareSize);
    }
    randomPosition() {
        this.x = Math.floor(Math.random() * squares);
        this.y = Math.floor(Math.random() * squares);
    }
}

class Donut3 {
    constructor() {
        this.randomPosition();
        this.points = 15;


        const image = new Image();
        image.src = "./Images/donut3-.png";
        image.addEventListener('load', () => {
            this.image = image;
            this.draw();
        });
    }
    draw() {
        context.drawImage(this.image, this.x * squareSize, this.y * squareSize, squareSize, squareSize);
    }
    randomPosition() {
        this.x = Math.floor(Math.random() * squares);
        this.y = Math.floor(Math.random() * squares);
    }
}

class Donut4 {
    constructor() {
        this.randomPosition();
        this.points = 20;


        const image = new Image();
        image.src = "./Images/donut4-.png";
        image.addEventListener('load', () => {
            this.image = image;
            this.draw();
        });
    }
    draw() {
        context.drawImage(this.image, this.x * squareSize, this.y * squareSize, squareSize, squareSize);
    }
    randomPosition() {
        this.x = Math.floor(Math.random() * squares);
        this.y = Math.floor(Math.random() * squares);
    }
}

class Pig {
    constructor() {
        this.randomPosition();
        this.points = 35;


        const image = new Image();
        image.src = "./Images/pigbg.png";
        image.addEventListener('load', () => {
            this.image = image;
            this.draw();
        });
    }
    draw() {
        context.drawImage(this.image, this.x * squareSize, this.y * squareSize, squareSize, squareSize);
    }
    randomPosition() {
        this.x = Math.floor(Math.random() * squares);
        this.y = Math.floor(Math.random() * squares);
    }
}

class Salad {
    constructor() {
        this.randomPosition();
        this.points = -25;


        const image = new Image();
        image.src = "./Images/saladbg.png";
        image.addEventListener('load', () => {
            this.image = image;
            this.draw();
        });
    }
    draw() {
        context.drawImage(this.image, this.x * squareSize, this.y * squareSize, squareSize, squareSize);
    }
    randomPosition() {
        this.x = Math.floor(Math.random() * squares);
        this.y = Math.floor(Math.random() * squares);
    }
}

const newBeer = new Beer();
const newDonut = new Donut1();
const newSalad = new Salad();