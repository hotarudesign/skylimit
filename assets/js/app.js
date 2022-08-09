"use strict";
gsap.set(".js-hero-text", {
  opacity: 0,
});

gsap.set(".js-feature-heading", {
  x: -200,
  opacity: 0,
});
gsap.set([".js-actor-list", ".js-feature-item"], {
  y: 100,
  opacity: 0,
});
gsap.to(".js-hero-text", {
  opacity: 1,
  duration: 0.4,
  stagger: 0.1,
});
gsap.to(".js-feature-heading", {
  x: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".mv",
    start: "bottom center",
  },
});
gsap.to(".js-feature-item", {
  y: 0,
  opacity: 1,
  stagger: 0.2,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".mv",
    start: "bottom center",
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

// headerスクロール背景変更
const scrollHeader = document.getElementById("js-header");
window.addEventListener("scroll", function () {
  if (this.pageYOffset > 400) {
    scrollHeader.classList.add("active");
  } else {
    scrollHeader.classList.remove("active");
  }
});
