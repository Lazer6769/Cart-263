
class Bird extends Animal {
    // Create a new bird object that moves to the right
    constructor(x, y, width, height) {

        super(x, y, width, height);

        this.originalY = this.y;

        //ONLY in the Bird class : new variables
        this.angle = 0;
        this.sleepiness = 0.1;
        // this.x = x;
        // this.y = y;
        // this.width = width;
        // this.height = height;
        this.vx = Math.random() * 5 + 1;
        this.vy = 0;
        this.animalBody = document.createElement("div");
    }


    // override A - p1
    // Move the Animal according to its velocity
    move() {
        //console.log("go");

        this.y = this.originalY + Math.sin(this.angle) * 8
        this.angle += 0.05;

        super.move();
    }
    // veer() causes the bird to randomly veer on the y axis
    veer() {
        let r = Math.random();
        //console.log("in veer "+r)
        if (r < this.sleepiness) {
            this.vy += randomRange(-.1, .1);
        }
    }

    // Overriding the superclass' wrap() method!
    wrap() {
        // NEW! Call the superclass (Animal) version of wrap()
        // This will handle wrapping on the x axis for us.
        // We use "super" to access methods in the SUPERclass (Animal)
        // So this calls the Animal version of wrap() after we make the specific changes 
        // in the SUBclass.

        if (this.x > window.innerWidth) {
            //reset
            this.vy = 0;
        }
        super.wrap();
    }
    // Move the bird according to its velocity
    // move() {
    //     this.x += this.vx;
    //     this.y += this.vy;
    //     //update the actual div...
    //     this.animalBody.style.left = this.x + "px";
    //     this.animalBody.style.top = this.y + "px";
    // }

    // // Wrap the bird if it reaches the right edge
    // wrap() {
    //     if (this.x > window.innerWidth) {
    //         this.x -= window.innerWidth;
    //     }
    // }

    // Display the bird as a ellipse
    renderAnimal() {
        super.renderAnimal();
        // this.animalBody.classList.add("animal");
        // this.animalBody.style.width = this.width + "px";
        // this.animalBody.style.height = this.height + "px";
        // this.animalBody.style.left = this.x + "px";
        // this.animalBody.style.top = this.y + "px";
        // this.animalBody.style.borderRadius = this.width + "px";
        this.animalBody.style.backgroundColor = `rgb(106, 90, 205)`;
        //add to the DOM
        document.getElementsByClassName("sky")[0].appendChild(this.animalBody);
    }
}
/*
Math.random() generates a random decimal between 0 (inclusive) and 1 (exclusive).
Multiply the result by (max – min + 1) to scale it to the desired range, 
then add min to shift it to the correct starting value.
Use Math.floor() to round down to the nearest integer, 
ensuring the result is within the specified range.
*/

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}