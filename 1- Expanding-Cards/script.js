"use-strict";

const panels = document.querySelectorAll(".panel");
// console.log(panels);

const removeActiveClasses = function () {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

panels.forEach((panel) => {
  // console.log(panel);

  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
