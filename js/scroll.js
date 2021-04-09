let arrowTop = document.querySelector(".arrow-top");

window.onscroll = function () {
  if (window.pageYOffset > 300) {
    arrowTop.classList.add("show");
  } else {
    arrowTop.classList.remove("show");
  }
};
arrowTop.onclick = function () {
  window.scrollTo(0, 0);
};
