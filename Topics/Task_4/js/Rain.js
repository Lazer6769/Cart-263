class Rain extends Weather {
    constructor(x, y, width, height) {
        super();
        this.rainy();
        this.rainyTemp();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = 0;
        this.sleepiness = 0.1;

        this.vx = 0;
        this.vy = Math.random() * 5 + 1;
        this.weatherBody = document.createElement('div');
        this.weatherBody.classList.add('rain');
    }
    move() {
        this.angle += this.sleepiness;
        this.vx = Math.cos(this.angle) * 2;
        this.vy = Math.sin(this.angle) * 2 + 5;
        this.weatherBody.style.transform = `translate(${this.vx}px, ${this.vy}px)`;
        super.move();
    }
    wrap() {
        if (this.y > window.innerHeight) {
            this.vx = 0;
            this.vy = Math.random() * 5 + 1;
            this.weatherBody.style.transform = `translate(${this.vx}px, ${this.vy}px)`;
        }
        super.wrap();

    }

    renderWeather() {
        super.renderWeather();
        this.wearherBody.style.backgroundColor = 'blue';
        document.body.appendChild(this.weatherBody);
    }
}


function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}