window.onload = function () {
    console.log("move");
    document.querySelector("#draw-box-a").
        addEventListener("mousemove", mouseMovefunction);

    //get bounding box of draw-box-a
    let rect = this.document.querySelector("#draw-box-a").getBoundingClientRect()

    console.log(document.querySelector("#draw-box-a").getBoundingClientRect())

    let pointDiv = this.document.createElement("div");
    pointDiv.classList.add("point");
    this.document.querySelector("#draw-box-a").appendChild(pointDiv);

    function mouseMovefunction(eventObj) {
        console.log("moving");
        console.log(eventObj);




        //DIFFERENCE TO ENSURE COORDS ARE RELATIVE
        let offsetX = eventObj.clientX - rect.x;
        let offsetY = eventObj.clientY - rect.y;

        // this.innerHTML =
        //     `x: ${offsetX}, y:${offsetY}`;

        pointDiv.style.top = `${offsetY}px`
        pointDiv.style.left = `${offsetX}px`
    }
}

