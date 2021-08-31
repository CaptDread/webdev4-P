"use strict";

// Hamburger menu
var burgerBtn = document.querySelector('.header__menu-btn');
var burgerMenu = document.querySelector('.header__nav');
burgerBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (burgerMenu.id != "open") {
    burgerMenu.id = "open";
    burgerBtn.id = "active";
  } else if (burgerMenu.id != "close") {
    burgerMenu.id = "close";
    burgerBtn.id = "inactive";
  }

  console.log(burgerMenu.id);
}); // Hero slide

var herobkgd = document.querySelector(".hero");
setInterval(function () {
  var z = Math.floor(Math.random() * 5 + 1);
  herobkgd.style.background = "url(dist/img/banner".concat(z, ".jpg), rgba(0, 0, 0, 35%)");
  herobkgd.style.backgroundSize = "cover";
  herobkgd.style.backgroundPosition = "center";
}, 5000); // Contact us Color change

var fbBtn = document.querySelector(".contactUs .facebook-btn");
var twBtn = document.querySelector(".contactUs .twitter-btn");
var inBtn = document.querySelector(".contactUs .instagram-btn");
var ctUsBar = document.querySelector('.contactUs__links');
fbBtn.addEventListener("mouseover", function (e) {
  e.preventDefault();
  ctUsBar.classList.add(".ctUs__fb");
  console.log("ctUs = fb");
});
fbBtn.addEventListener("mouseout", function (e) {
  e.preventDefault();
  ctUsBar.classList.remove(".ctUs__fb");
  console.log("ctUs != fb");
});
twBtn.addEventListener("mouseover", function (e) {
  e.preventDefault();
  ctUsBar.classList.add("ctUs__tw");
  console.log("ctUs = tw");
});
twBtn.addEventListener("mouseout", function (e) {
  e.preventDefault();
  ctUsBar.classList.remove("ctUs__tw");
  console.log("ctUs != tw");
});
inBtn.addEventListener("mouseover", function (e) {
  e.preventDefault();
  ctUsBar.classList.add("ctUs__ig");
  console.log("ctUs = ig");
});
inBtn.addEventListener("mouseout", function (e) {
  e.preventDefault();
  ctUsBar.classList.remove("ctUs__ig");
  console.log("ctUs != ig");
});
//# sourceMappingURL=main.js.map
