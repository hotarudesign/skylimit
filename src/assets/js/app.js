"use strict";
gsap.set(".js-header", {
  opacity: 0,
});
gsap.to(".js-header", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".mv",
    start: "center top",
  },
});
gsap.set(".js-hero", {
  opacity: 0,
});
gsap.set(".js-hero-text", {
  x: -100,
  opacity: 0,
});
gsap.set(".js-carousel", {
  y: 100,
  opacity: 0,
});
gsap.to(".js-carousel", {
  y: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".program",
    start: "top center",
  },
});
gsap.to(".js-hero-text", {
  x: 0,
  opacity: 1,
  delay: 1,
});
gsap.set([".js-column-bg01", ".js-column-bg02", ".js-column-bg03"], {
  opacity: 0,
});
gsap.set(
  [
    ".js-column-title01",
    ".js-column-desc01",
    ".js-column-title02",
    ".js-column-desc02",
    ".js-column-title03",
    ".js-column-desc03",
  ],
  {
    x: 100,
    opacity: 0,
  }
);
gsap.to(".js-column-bg01", {
  opacity: 1,
  delay: 1.2,
  duration: 3,
  scrollTrigger: {
    trigger: ".mv",
    start: "bottom center",
  },
});
gsap.to(".js-column-title01", {
  x: 0,
  delay: 0.5,
  opacity: 1,
  scrollTrigger: {
    trigger: ".mv",
    start: "bottom center",
  },
});
gsap.to(".js-column-desc01", {
  x: 0,
  delay: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".mv",
    start: "bottom center",
  },
});
gsap.to(".js-column-bg02", {
  opacity: 1,
  delay: 1.2,
  duration: 3,
  scrollTrigger: {
    trigger: ".js-column-bg01",
    start: "center center",
  },
});
gsap.to(".js-column-title02", {
  x: 0,
  delay: 0.5,
  opacity: 1,
  scrollTrigger: {
    trigger: ".feature",
    start: "top top",
  },
});
gsap.to(".js-column-desc02", {
  x: 0,
  delay: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".feature",
    start: "top top",
  },
});
gsap.to(".js-column-bg03", {
  opacity: 1,
  delay: 1.2,
  duration: 3,
  scrollTrigger: {
    trigger: ".feature",
    start: "bottom bottom",
  },
});

gsap.to(".js-column-title03", {
  x: 0,
  delay: 0.5,
  opacity: 1,
  scrollTrigger: {
    trigger: ".feature",
    start: "bottom bottom",
  },
});
gsap.to(".js-column-desc03", {
  x: 0,
  delay: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".feature",
    start: "bottom bottom",
  },
});
gsap.set(".js-actor-list", {
  y: 100,
  opacity: 0,
});
gsap.to(".js-hero", {
  opacity: 1,
  duration: 0.4,
  stagger: 0.1,
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

// actorタブメニュー
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

//ハンバーガーメニュー
const html = document.querySelector("html");
const jsBtn = document.getElementById("js-btn");
const jsNav = document.getElementById("js-nav");
const headerHeight = 0;
let bodyHeight;
let scrollpos;

jsBtn.addEventListener("click", function () {
  this.classList.toggle("is-active");
  jsNav.classList.toggle("is-active");

  if (jsBtn.classList.contains("is-active")) {
    // 現在のスクロール位置を取得する
    scrollpos = window.pageYOffset;
    // メニューが開いたことを示すクラスをhtmlに付与する
    html.classList.add("is-menuOpen");
    // bodyのtopにスクロール位置を付与する
    document.body.style.top = scrollpos * -1 + "px";
    // ウィンドウの高さを取得
    bodyHeight = window.innerHeight;
    // 取得した高さを、メニューに付与する（ヘッダーの高さを引いた数）
    jsNav.style.height = bodyHeight - headerHeight + "px";
  } else {
    // 閉じる処理
    // メニューが開いたことを示すクラスをはずす
    html.classList.remove("is-menuOpen");
    // スクロール位置を開いた時の位置へ戻す
    window.scrollTo(0, scrollpos);
    jsNav.style.height = 100;
  }
});

// programスライダー
const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
  // 前後スライドボタンを表示
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: false, // ループの有効化
  slidesPerView: 1, // 表示するスライドの枚数
  centeredSlides: true, // スライドを中央揃えを有効化
  effect: "coverflow",
  initialSlide: 1,
  coverflowEffect: {
    rotate: 0, // スライドの回転角度
    stretch: 50, // スライドの間隔（px単位）
    depth: 200, // 奥行きの設定（translateをZ方向にpx単位で移動）
    modifier: 1, //
    slideShadows: true, // 先頭スライドのbox-shadowを有効化
  },
  breakpoints: {
    // スライドの表示枚数：500px以上の場合
    500: {
      slidesPerView: 2.5,
    },
  },
});
