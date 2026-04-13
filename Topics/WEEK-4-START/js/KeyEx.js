window.onload = function () {
    console.log("keys");


    window.setTimeout(function (e) {
        let parent = document.querySelector("#parent");
        parent.innerHTML += "New text"

    }, 1000)

    window.setInterval(function (e) {
        let parent = document.querySelector("#parent");
        parent.innerHTML += "New text for interval"

    }, 1000)



    window.addEventListener('keydown', KeyHandler);
    window.addEventListener('keyup', KeyHandlerUp);

    function KeyHandlerUp(event) {
        if (event.code === "Space")
            document.querySelector("#boxB").style.background = "pink"
    }


    let speedX = 5;
    function KeyHandler(event) {


        if (event.key === "ArrowRight") {
            document.querySelector("#boxA").style.left = parseInt(document.querySelector("#boxA").style.left) + speedX + "px"

        }

        if (event.key === "ArrowLeft") {
            document.querySelector("#boxA").style.left = parseInt(document.querySelector("#boxA").style.left) - speedX + "px"

        }
        //code = "space"
        if (event.key === " ")
            document.querySelector("#boxB").style.background = "orange"

        // else {

        //     console.log(event)

        //     document.querySelector("#textContainer").textContent += ` ${event.key} `
        // }
    }

}