"use-strict";

const loadText = document.querySelector(".loading-text");
const backgroundImage = document.querySelector(".bg");

let loadImage = 0;
let intImage = setInterval(blurringImage, 30);

function blurringImage() {
  loadImage++;

  // if (loadImage > 99) {
  //   clearInterval(intImage);
  // }

  loadImage > 99 ? clearInterval(intImage) : "Error in Updating";

  loadText.innerHTML = `${loadImage}%`;
  loadText.style.opacity = scale(loadImage, 0, 100, 1, 0);
  backgroundImage.style.filter = `blur(${scale(loadImage, 0, 100, 30, 0)}px)`;

  // console.log(loadImage);
}

// Reference for styling opacity
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
