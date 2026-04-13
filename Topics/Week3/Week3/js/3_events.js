window.onload = setup;
function setup() {
  console.log("events!")
  // let introState = "off" simple way of doing it 
  // let s1State = "off"

  // let introSection = document.querySelector('#intro');
  // introSection.addEventListener("click", mouseClickCallback);

  // let s1 = document.querySelector("#s1");
  // s1.addEventListener("click", mouseClickCallback);

  // let s2 = document.querySelector("#s2");
  // s2.addEventListener("click", mouseClickCallback);

  // let s3 = document.querySelector("#s3");
  // s3.addEventListener("click", mouseClickCallback);


  let allSections = document.querySelectorAll(".mouseclick-active-section")
  for (let currentSection of allSections) {
    currentSection.addEventListener("click", mouseClickCallback);
  }




  function mouseClickCallback(eventObj) {
    // console.log("Clicked");
    console.log(this);
    console.log(eventObj)
    // eventObj.target.style.background = "blue";
    let idOfThis = this.getAttribute("id")
    // console.log(document.querySelector("#" + idOfThis + " p"));

    // `#${idOfThis} p`

    // console.log(document.querySelector(`#${idOfThis} p`));

    if (this.getAttribute("custom-bool") === "inactive") {


      let child = document.querySelector(`#${idOfThis} p`);
      let classToAdd = `${idOfThis}-section-active`
      this.classList.add(classToAdd)
      let classToAddP = `${idOfThis}-section-p-active`
      child.classList.add(classToAddP);
      console.log(this.getAttribute("custom-bool")) // attributes 
      this.setAttribute("custom-bool", "active")
    }
    else {
      let child = document.querySelector(`#${idOfThis} p`);
      let classToAdd = `${idOfThis}-section-active`
      this.classList.remove(classToAdd)
      let classToAddP = `${idOfThis}-section-p-active`
      child.classList.remove(classToAddP);
      console.log(this.getAttribute("custom-bool")) // attributes 
      this.setAttribute("custom-bool", "inactive")
    }
    // element is the div, h2 something before the property which keeps it inside
    // property (attribute) are customizations to the particular obejct, style, ID, etc.

    function mouseClicks1Callback() {
      console.log("s1 Clicked");
      // console(this)
    }



  }
}