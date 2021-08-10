var elDarkModeBtn = document.querySelector(".dark-mode-btn");
var elBody = document.querySelector(".body");

elDarkModeBtn.addEventListener("click", function() {
  elBody.classList.toggle("body--dark-mode");
})


var winSize = window.innerWidth;

winSize.addEventListener("resize", function name(params) {
  elDarkModeBtn.textContent = "";

})


