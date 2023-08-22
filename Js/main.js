//Create Our Works Filter
let switchersLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

switchersLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});
// Remove Active Class From All Lis And Add To Current
function removeActive() {
  switchersLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
//manage images
function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
//end Our Works Filter

//start up cursor
let span = document.querySelector(".up");
window.onscroll = function () {
  this.scrollY >= 1000
    ? span.classList.add("show")
    : span.classList.remove("show");
};
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// end up cursor
