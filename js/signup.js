step1Button = document.querySelector(".step__1__button");
step2Button = document.querySelector(".step__2__button");
step3Button = document.querySelector(".step__3__button");
fromstep1 = document.querySelector(".step__1");
fromstep2 = document.querySelector(".step__2");
fromstep3 = document.querySelector(".step__3");

step1Button.addEventListener("click", () => {
  fromstep1.classList.remove("active");
  fromstep2.classList.add("active");
});
step2Button.addEventListener("click", () => {
  fromstep2.classList.remove("active");
  fromstep3.classList.add("active");
});
step3Button.addEventListener("click", () => {
  parent.location.hash = "hello";
});
