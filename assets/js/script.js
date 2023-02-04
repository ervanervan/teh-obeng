/*  SLIDE RIGHT */
const menu_btn = document.getElementById("menu-btn");
const menu_close = document.getElementById("close-btn");
const menu_slide = document.getElementById("menu-slider");

menu_btn.addEventListener("click", function () {
  menu_slide.classList.toggle("show")
})

menu_close.addEventListener("click", function () {
  menu_slide.classList.toggle("show")
})