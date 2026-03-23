class VideoObj {
  constructor(x, y, w, h, videoElement, context) {
    this.videoElement = videoElement;
    this.context = context;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.shapeX = 10;
    this.shapeY = 10;
    this.shapeCol = "#000000";


    let filterButton_blur = document.getElementById("filter_button_blur");
    let blurInput = document.getElementById("blurnum");
    let filterButton_sepia = document.getElementById("filter_button_sepia");
    let sepiaInput = document.getElementById("sepianum");
    let filterButton_hue = document.getElementById("filter_button_hue");
    let hueInput = document.getElementById("huenum");
    let filterButton_invert = document.getElementById("filter_button_invert");
    let invertInput = document.getElementById("invertnum");

    this.userProvidedBlur = 0;
    this.userProvidedSepia = 0;
    this.userProvidedHue = 0;
    this.userProvidedInvert = 0;

    let self = this;

    filterButton_blur.addEventListener("click", function () {
      self.userProvidedBlur = Number(blurInput.value) || 0;
      console.log("blur", self.userProvidedBlur);
    });

    filterButton_sepia.addEventListener("click", function () {
      self.userProvidedSepia = Math.min(1, Math.max(0, Number(sepiaInput.value) || 0));
      console.log("sepia", self.userProvidedSepia);
    });

    filterButton_hue.addEventListener("click", function () {
      self.userProvidedHue = Number(hueInput.value) || 0;
      console.log("hue", self.userProvidedHue);
    });

    filterButton_invert.addEventListener("click", function () {
      self.userProvidedInvert = Math.min(1, Math.max(0, Number(invertInput.value) || 0));
      console.log("invert", self.userProvidedInvert);
    });
  }

  display() {
    this.context.save();
    this.context.filter = `blur(${this.userProvidedBlur}px) sepia(${this.userProvidedSepia}) hue-rotate(${this.userProvidedHue}deg) invert(${this.userProvidedInvert})`;
    this.context.drawImage(this.videoElement, this.x, this.y, this.w, this.h);
    this.context.fillStyle = this.shapeCol;
    this.context.fillRect(this.shapeX, this.shapeY, 50, 50);
    this.context.restore();
  }

  //called when rectangle color is to be updated
  changeColor(newCol) {
    if (typeof newCol === "string") {
      this.shapeCol = newCol;
    }
  }

  //called when rectangle Pos is to be updated
  updatePositionRect(mx, my) {
    if (typeof mx === "number" && typeof my === "number") {
      const rectSize = 50;
      this.shapeX = Math.max(0, Math.min(this.w - rectSize, mx - rectSize / 2));
      this.shapeY = Math.max(0, Math.min(this.h - rectSize, my - rectSize / 2));
    }
  }

  update(videoElement) {
    this.videoElement = videoElement;
    if (this.board && typeof this.board.mouseOffsetX === "number" && typeof this.board.mouseOffsetY === "number") {
      this.updatePositionRect(this.board.mouseOffsetX, this.board.mouseOffsetY);
    }
  }
}
