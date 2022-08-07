"use strict";
gsap.set(".js-hero-text", {
  opacity: 0,
});

gsap.set(".js-program-text_1", {
  x: -200,
  opacity: 0,
});
gsap.set(".js-program-text_2", {
  x: 200,
  opacity: 0,
});
gsap.set(".js-actor-list", {
  y: 100,
  opacity: 0,
});
gsap.set([".js-program-img_1", ".js-program-img_2"], {
  y: 100,
  opacity: 0,
});
gsap.to(".js-hero-text", {
  opacity: 1,
  duration: 0.4,
  stagger: 0.1,
});
gsap.to(".js-program-text_1", {
  x: 0,
  opacity: 1,
  duration: 0.4,
  scrollTrigger: {
    trigger: ".program",
    start: "top center",
  },
});
gsap.to(".js-program-img_1", {
  y: 0,
  opacity: 1,
  delay: 0.4,
  scrollTrigger: {
    trigger: ".program",
    start: "top center",
  },
});
gsap.to(".js-program-img_2", {
  y: 0,
  opacity: 1,
  delay: 0.4,
  scrollTrigger: {
    trigger: ".program",
    start: "center center",
  },
});
gsap.to(".js-program-text_2", {
  x: 0,
  opacity: 1,
  duration: 0.4,
  scrollTrigger: {
    trigger: ".program",
    start: "center center",
  },
});
gsap.to(".js-actor-list", {
  y: 0,
  opacity: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".actor",
    start: "top center",
  },
});

document.addEventListener(
  "DOMContentLoaded",
  function () {
    const tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", tabSwitch, false);
    }
    function tabSwitch() {
      document
        .getElementsByClassName("is-active")[0]
        .classList.remove("is-active");
      this.classList.add("is-active");
      document.getElementsByClassName("is-show")[0].classList.remove("is-show");
      const arrayTabs = Array.prototype.slice.call(tabs);
      const index = arrayTabs.indexOf(this);
      document.getElementsByClassName("panel")[index].classList.add("is-show");
    }
  },
  false
);
