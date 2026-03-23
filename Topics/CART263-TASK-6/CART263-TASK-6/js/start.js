window.onload = go_all_stuff;

function go_all_stuff() {
    console.log("go");

    /* for loading the video */
    let videoEl = document.getElementById("video-birds");
    window.addEventListener("click", function () {
        if (videoEl.currentTime === 0) {
            videoEl.play()
        }
    })


    videoEl.loop = true;

    let theCanvases = document.querySelectorAll(".canvases");
    let theContexts = [];
    //add a context for each canvas and put into an array

    for (let i = 0; i < theCanvases.length; i++) {
        let context = theCanvases[i].getContext("2d");
        theContexts.push(context);
    }

    let drawingBoardA = new DrawingBoard(theCanvases[0], theContexts[0], theCanvases[0].id);
    //add a circular object to canvas A
    drawingBoardA.addObj(new CircularObj(100, 100, 20, "#FFC300", "#E6E6FA", drawingBoardA.context))
    drawingBoardA.display();



    let drawingBoardB = new DrawingBoard(theCanvases[1], theContexts[1], theCanvases[1].id);
    //add a rectangular object to canvas B
    drawingBoardB.addObj(new RectangularObj(100, 100, 50, 70, "#FF5733", "#E6E6FA", drawingBoardB.context))
    drawingBoardB.display();


    let drawingBoardC = new DrawingBoard(theCanvases[2], theContexts[2], theCanvases[2].id);
    //add a freestyle object to canvas C
    drawingBoardC.addObj(new FreeStyleObj(10, 100, 300, "#CF9FFF", "#CF9FFF", drawingBoardC.context))
    drawingBoardC.display();

    let drawingBoardD = new DrawingBoard(theCanvases[3], theContexts[3], theCanvases[3].id);
    let videoObj = new VideoObj(0, 0, 400, 300, videoEl, drawingBoardD.context);
    videoObj.board = drawingBoardD;
    drawingBoardD.addObj(videoObj);
    drawingBoardD.display();



    // we already update rectangle from VideoObj.update() using board.mouseOffset

    /*** RUN THE ANIMATION LOOP  */
    window.requestAnimationFrame(animationLoop);

    function animationLoop() {
        /*** CALL THE EACH CANVAS TO ANIMATE INSIDE  */
        drawingBoardA.animate();
        drawingBoardB.animate();
        drawingBoardC.animate();
        drawingBoardD.run(videoEl)
        window.requestAnimationFrame(animationLoop);
    }



    /** TASK 1:(Drawing Board A) - 
     *  1: animate the circle object(s) somehow/anyhow.. (there may be more than one)
     * You can use the mouse coordinates - the canvas ALREADY has event listeners for mouse click and mouse move
     * implemeneted, as well as the proper mouseX and mouseY (NO need to add)
     * -> ensure that any properties that are changed by the circle object occur in the update method already provided,
     * and use the member properties provided (you may add new ones ... or not :)
     * 
     * 2: add new circle objects (different sizes, positions, colors) to the canvas (board A) using some form of user interaction
     * 3: remove new circle objects from the canvas (board A) using some other form of user interaction 
     * Please for this exercise - do not add any new shapes other than the circular object...
     * 
     */
    CircularObj.prototype.board = null;

    // Add isPointInside method
    CircularObj.prototype.isPointInside = function (px, py) {
        let dx = px - this.x;
        let dy = py - this.y;
        return Math.sqrt(dx * dx + dy * dy) < this.radius;
    };

    // Modify update method
    CircularObj.prototype.update = function () {
        if (this.board) {
            let speed = 0.05;
            this.x += (this.board.mouseOffsetX - this.x) * speed;
            this.y += (this.board.mouseOffsetY - this.y) * speed;
        }
    };

    // Add dblclick listener to drawingBoardA
    drawingBoardA.canvas.addEventListener("dblclick", function (e) {
        let canvasBoundingRegion = drawingBoardA.canvas.getBoundingClientRect();
        let mouseOffsetX = parseInt(e.clientX - canvasBoundingRegion.x);
        let mouseOffsetY = parseInt(e.clientY - canvasBoundingRegion.y);

        // Remove circle on double click if mouse is over it
        for (let i = drawingBoardA.objectsOnCanvas.length - 1; i >= 0; i--) {
            if (drawingBoardA.objectsOnCanvas[i].isPointInside(mouseOffsetX, mouseOffsetY)) {
                drawingBoardA.objectsOnCanvas.splice(i, 1);
                break; // remove only one
            }
        }
    });

    // Modify clickCanvas for drawingBoardA
    let originalClickCanvas = drawingBoardA.clickCanvas;
    drawingBoardA.clickCanvas = function (e) {
        originalClickCanvas.call(this, e);
        if (this.drawingBoardId === "partA") {
            // Add new circle on click
            let colors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#FF33A1", "#33FFF0"];
            let fillColor = colors[Math.floor(Math.random() * colors.length)];
            let strokeColor = colors[Math.floor(Math.random() * colors.length)];
            let radius = Math.random() * 40 + 10; // 10 to 50
            let newCircle = new CircularObj(this.mouseOffsetX, this.mouseOffsetY, radius, fillColor, strokeColor, this.context);
            newCircle.board = this;
            this.addObj(newCircle);
        }
    };






    /** TASK 2:(Drawing Board B) - 
     *  1: Affect the rectangle by input from the microphone somehow, in real time...
     *  at least two properties of the rectangle need to update and change...
     *  2: apply some arbitrary animation to the rectangle obj (change the properties in the update method provided)
     * -> the code for the microphone has NOT been added  - you need to implement it correctly...
     *  
     */  // make rectangle follow mouse on partD canvas and change color on click


    /** TASK 3:(Drawing Board C) - 
     *  1: Affect the free-style shape by input from the microphone somehow, in real time...
     *  at least two properties of the free-style shape need to update and change...
     *  2: apply some arbitrary animation to the free-style shape (change the properties in the update method provided)
     * -> the code for the microphone has NOT been added  - you need to implement it correctly...
     *  
     */

    /** TASK 4:(Video - recorded - )
     * // add filters or manipulate the pixels... take user input from the boxes..
     *  1: using thr provided VideoObj class - > 
     * you will see all the code needed for activating  a blur filter on the video - activate it
     * 2: Next: apply the same logic to enable the other 3 possible filters (adding the event listeners etc)
     * -> make sure to look at the input/output ranges for the values
     * 3: -> apply the context filters  to the video for the three filter options (and activate the blur as well)
     * 4: ->  using the mousemove event listener (already applied in the drawing board) - 
     * make the rectangle (over the video) - follow the mouse ... AND change color when you click on the canvas
     * USE & FILL IN THE METHODS ALREADY set out in the VideoObj class...
     * 
     * 
     * PLEASE NOTE: there will be marks taken off if you ignore the instructions ;)
     *  
     */
    let originalClickCanvasD = drawingBoardD.clickCanvas;
    drawingBoardD.clickCanvas = function (e) {
        originalClickCanvasD.call(this, e);
        if (this.drawingBoardId === "partD") {
            const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#FFFFFF", "#000000"];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            videoObj.changeColor(randomColor);
        }
    };



}