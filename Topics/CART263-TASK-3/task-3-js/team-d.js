setup_D();
/** THEME: DECEPTION  */
function setup_D() {
  console.log("in d");
  /**************************************************** */
  //get the buttons
  activateButtons(`#TEAM_D`, "ani_canvD", aniA, aniB, aniC, aniD);

  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN A INSIDE HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in mouseclick event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function  -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  //JORDAN1
  function aniA(parentCanvas) {
    console.log("in ani-A -teamD");

    const rainbow = [
      "#eb0781",
      "#ff75bf",
      "#a622ec",
      "#9500ff3c",
      "#06069a",
      "#0000ff",
      "#1bc8db",
      "#40ff00",
      "#33c303",
      "#20d243b2",
      "#9bae0a",
      "#FFFF00",
      "#ffff53",
      "#ff5900",
      "#FF7F00",
      "#ac2626",
      "#FF0000",
    ];

    let button = document.createElement("div");
    button.classList.add("TEAM_D_box");
    button.textContent = "CLICK";
    parentCanvas.appendChild(button);

    let numClicks = 0; // for number of clicks
    // let aniRef = null;
    let circles = []; //empty array of circles
    // let aniSpeed = 1;

    //call to setup the animation before running
    setupSketch();
    //add event listener to the button
    button.addEventListener("click", changeGridHandler);



    function setupSketch() {
      //offset
      let offset = 60;
      //make a grid of circles - STATIC
      for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 12; j++) {
          //make some shapes ;) - using divs
          let circle = document.createElement("div");
          circle.classList.add("TEAM_D_circle");
          circle.style.width = `20px`;
          circle.style.height = `20px`;
          circle.style.left = offset + i * 25 + "px";
          circle.style.top = offset + j * 25 + "px";
          parentCanvas.appendChild(circle);
          circles.push(circle);
          circle.setAttribute("ani-dir-circle-dir", parseInt(Math.random() * 5));

          // Color-changing interval for each circle
          var currentColor = 0;
          setInterval(() => {
            circle.style.backgroundColor = rainbow[currentColor];
            circle.style.borderColor = rainbow[currentColor];
            currentColor++;
            if (currentColor >= rainbow.length) {
              currentColor = 0;
            }
          }, 200);
        }
      }
    }

    //when mouseiSClicked
    function changeGridHandler() {



      if (numClicks < circles.length - 2) {
        numClicks++;
      } else {
        numClicks = 0;
      }

      this.textContent = numClicks;

      //only animate evry second one
      for (let i = 0; i < circles.length; i++) {

        let direction = parseInt(circles[i].getAttribute("ani-dir-circle-dir"));

        if (parseInt(circles[i].style.width) > 75 || (parseInt(circles[i].style.width) < 5)) {
          direction *= -1;
          circles[i].setAttribute("ani-dir-circle-dir", direction);

        }


        circles[i].style.width = parseInt(circles[i].style.width) + 5 * direction + "px";
        circles[i].style.height = parseInt(circles[i].style.height) + 5 * direction + "px";

        if (i % numClicks === 0) {
          console.log("here");
          circles[i].style.opacity = 0.1;

        } else {
          circles[i].style.opacity = 1;
        }
      }
    }
  }

  /****************ANI D************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN D INSIDE HERE */
  /****************ANI D************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in animation using requestAnimationFrame somewhere to make the sketch animate :)
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function  -
   * remember you can define other functions inside....
   * Do not change any code above or t he HTML markup.
   * **/

  //JORDAN4
  function aniD(parentCanvas) {
    console.log("in ani-D -teamD");


    const rainbow = [
      "#eb0781",
      "#ff75bf",
      "#a622ec",
      "#9500ff3c",
      "#06069a",
      "#0000ff",
      "#1bc8db",
      "#40ff00",
      "#33c303",
      "#20d243b2",
      "#9bae0a",
      "#FFFF00",
      "#ffff53",
      "#ff5900",
      "#FF7F00",
      "#ac2626",
      "#FF0000",
    ];

    //get the rendered bounding Box of parent and use the width and height
    let boundingBoxParent = parentCanvas.getBoundingClientRect();
    let arrayOfellipses = [];

    //make a grid of cells
    for (let i = 10; i < boundingBoxParent.width; i += 10) {
      for (let j = 20; j < boundingBoxParent.height; j += 22.5) {
        //create a div and place in the grid
        let ellipse = document.createElement("div");
        ellipse.classList.add("TEAM_D_h_cell_D");
        parentCanvas.appendChild(ellipse);
        ellipse.style.left = `${j}px`;
        ellipse.style.top = `${i}px`;
        ellipse.style.width = "20px";
        ellipse.style.height = "30px";
        ellipse.style.opacity = 1;
        // ellipse.style.background =
        //   sampleColors[parseInt(Math.random() * sampleColors.length)];
        ellipse.setAttribute("ani-dir-O", "1");
        ellipse.setAttribute("ani-dir-W", "1");
        ellipse.setAttribute("ani-dir-H", "1");
        ellipse.setAttribute("ani-go", "false");
        arrayOfellipses.push(ellipse);
        setTimeout(function () { ellipse.setAttribute("ani-go", "true") }, Math.random() * 3500)

        // var currentColor = 0;

        setInterval(() => {
          let currentColor = parseInt(Math.random() * rainbow.length);
          ellipse.style.background = `${rainbow[currentColor]}`;
          ellipse.style.color = `${rainbow[currentColor]}`;
          ellipse.style.borderColor = `${rainbow[currentColor]}`;
          currentColor++;
          if (currentColor == rainbow.length - 7) {
            currentColor = 0;
          }
        }, 750);


      }
    }

    requestAnimationFrame(animate)


    /****** callback for requestAnimationFrame **********/
    function animate() {
      for (let i = 0; i < arrayOfellipses.length; i++) {
        if (arrayOfellipses[i].getAttribute("ani-go") === "true") {
          let dir_of_ani_W = parseFloat(arrayOfellipses[i].getAttribute("ani-dir-W"));
          let dir_of_ani_H = parseFloat(arrayOfellipses[i].getAttribute("ani-dir-H"));
          let dir_of_ani_O = parseFloat(arrayOfellipses[i].getAttribute("ani-dir-O"));

          let currentSizeW = parseFloat(arrayOfellipses[i].style.width);
          let currentSizeH = parseFloat(arrayOfellipses[i].style.height);
          let currentOpacity = parseFloat(arrayOfellipses[i].style.opacity);





          //console.log(currentSize)
          if (currentSizeW > 50 || currentSizeW < 5) {
            dir_of_ani_W *= -1;
            arrayOfellipses[i].setAttribute("ani-dir-W", dir_of_ani_W);
          }

          if (currentSizeH > 67 || currentSizeH < 10) {
            dir_of_ani_H *= -1;
            arrayOfellipses[i].setAttribute("ani-dir-H", dir_of_ani_H);
          }

          if (currentOpacity > 1 || currentOpacity < 0.1) {
            dir_of_ani_O *= -1;
            arrayOfellipses[i].setAttribute("ani-dir-O", dir_of_ani_O);
          }

          arrayOfellipses[i].style.opacity = currentOpacity + 0.01 * dir_of_ani_O;


          arrayOfellipses[i].style.width = currentSizeW + 0.1 * dir_of_ani_W + "px";
          arrayOfellipses[i].style.height = currentSizeH + 0.5 * dir_of_ani_H + "px";
          arrayOfellipses[i].style.borderRadius =
            currentSizeW + 0.5 * dir_of_ani_W + "px";
          currentSizeH + 0.3 * dir_of_ani_H + "px";


        }
      }
      //recall animation loop
      requestAnimationFrame(animate);
    }
  }

}




