window.onload = function () {

    let mousePressed = false

    let mouseX = 0;
    let mouseY = 0;

    let canvas = document.getElementById("testCanvas");
    //get the context
    let context = canvas.getContext("2d");

    function make2DArray(cols, rows) {
        let arr = new Array(cols);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(rows);
            //fill the array with 0's
            for (let j = 0; j < arr[i].length; j++) {
                arr[i][j] = 0
            }
        }
        return arr;
    }

    //let functions
    //the grid 
    let grid;
    // how big is each square 
    let w = 5;
    let cols, rows;
    // let hueValue = 200;

    // check if a row is within bounds 
    function withinCols(i) {
        return i >= 0 && i <= cols - 1;
    }
    // check if a column is within bounds 
    function withinRows(j) {
        return j >= 0 && j <= rows - 1;
    }
    cols = canvas.width / w;
    rows = canvas.height / w;
    grid = make2DArray(cols, rows);


    // // get the canvas
    // let canvas = document.getElementById("testCanvas");
    // //get the context
    // let context = canvas.getContext("2d");

    canvas.addEventListener("mousemove", sandMove)
    canvas.addEventListener("mousedown", sandDown)
    canvas.addEventListener("mouseup", sandUp)



    function sandMove(event) {

        if (mousePressed === true) {


            let boundingBox = canvas.getBoundingClientRect()
            // console.log(boundingBox)
            mouseX = event.clientX - boundingBox.x
            mouseY = event.clientY - boundingBox.y


        }

    }
    function animateSand() {

        let mouseCol = Math.floor(mouseX / w);
        let mouseRow = Math.floor(mouseY / w);

        // Randomly add an area of sand particles 
        let matrix = 3;
        let extent = Math.floor(matrix / 2);
        for (let i = -extent; i <= extent; i++) {
            for (let j = -extent; j <= extent; j++) {
                if (Math.random() < 0, 75) {
                    let col = mouseCol + i;
                    let row = mouseRow + j;

                    if (withinCols(col) && withinRows(row)) {
                        grid[col][row] = 1;
                        // grid[col][row] = hueValue;

                    }
                }
            }
        }
    }
    function sandDown(event) {
        mousePressed = true
        console.log("sandDown")

        let boundingBox = canvas.getBoundingClientRect()
        // console.log(boundingBox)
        mouseX = event.clientX - boundingBox.x
        mouseY = event.clientY - boundingBox.y
    }

    function sandUp(event) {
        mousePressed = false
        console.log("sandUp")
    }

    window.requestAnimationFrame(draw)
    function draw() {

        if (mousePressed === true) {
            animateSand();
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        //draw sand 
        for (let i = 0; i < cols; i++) {
            // console.log(i)
            for (let j = 0; j < rows; j++) {
                //console.log(j)
                //colours of grids
                // noStroke();
                if (grid[i][j] > 0) {

                    context.fillStyle = "rgb(187, 231, 254)"
                    // fill(grid[i][j], 255, 255);
                    //where they go
                    let x = i * w;
                    let y = j * w;
                    context.fillRect(x, y, w, w)
                    // console.log(x, y)
                    // square(x, y, w);
                }
            }
        }

        //Create an array for the next frame of animation 
        let nextGrid = make2DArray(cols, rows);
        // check every cell 
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                //what is the state?
                let state = grid[i][j];

                //if it's a piece of sand!
                if (state > 0) {
                    //what is below
                    let below = grid[i][j + 1];
                    //randomly go left and right 
                    let dir = 1
                    if (Math.random() < 0.5) {
                        dir *= -1
                    }

                    //check below left or right
                    let belowA = -1;
                    let belowB = -1;

                    if (withinCols(i + dir)) {
                        //R
                        belowA = grid[i + dir][j + 1]
                    }
                    if (withinCols(i - dir)) {
                        //L
                        belowB = grid[i - dir][j + 1]
                    }
                    //can if fall below or left or right 
                    if (below === 0) {
                        nextGrid[i][j + 1] = state;
                    } else if (belowA === 0) {
                        nextGrid[i + dir][j + 1] = state;
                    } else if (belowB === 0) {
                        nextGrid[i - dir][j + 1] = state;
                        //stay put
                    } else {
                        nextGrid[i][j] = state;
                    }
                }
            }
        }
        grid = nextGrid;


        window.requestAnimationFrame(draw)
    }
}