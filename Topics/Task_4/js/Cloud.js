class Cloud extends Weather {
    constructor(x, y, cloudColor) {
        super();
        this.cloudy();
        this.cloudyTemp();
        this.x = x;
        this.y = y;
        this.cloudColor = cloudColor;
        this.cloudDiv = document.createElement("div");
        this.vx = 1;
        this.vy = 0.5;
        self = this;
    }
    move() {
        this.x += this.vx;
        this.y += this.vy;
        this.updateDivPos();
    }
    wrap() {
        if (this.x > window.innerWidth) {
            this.vy = 0; // Reset to the left side of the screen

        }
        super.wrap();
    }

    renderWeather() {
        //cloud - IN the sky
        this.cloudDiv.classList.add("cloud");
        this.cloudDiv.style.background = `rgb(${this.cloudColor.r},${this.cloudColor.g},${this.cloudColor.b})`;
        //append to the SKY div
        document.querySelector(".sky").appendChild(this.cloudDiv);
    }
}
