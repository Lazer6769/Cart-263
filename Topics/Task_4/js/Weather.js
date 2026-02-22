class Weather {
    constructor(state = 'nomral', temp = 20) {
        this.state = state;
        this.temp = temp;
    }
    normal() {
        this.state = 'normal';
    }
    sunny() {
        this.state = 'sunny';
    }
    rainy() {
        this.state = 'rainy';
    }
    cloudy() {
        this.state = 'cloudy';
    }
    sunnyTemp() {
        this.temp = 20;
    }
    rainyTemp() {
        this.temp = 15;
    }
    cloudyTemp() {
        this.temp = 10;
    }

    renderWeather() {
        if (this.state === 'sunny') {
            this.sun = new Sun();
        } else if (this.state === 'rainy') {
            this.rain = new Rain();
        } else if (this.state === 'cloudy') {
            this.cloud = new Cloud();
        }
    }
}


