const testimonials = document.querySelectorAll(".testimonial");
const nextBtn = document.querySelectorAll(".next");
const preBtn = document.querySelectorAll(".prev");
testimonials.forEach((item, i) => {
  item.style.transform = `translateX(${100 * (i - 0)}%)`;
});

const maxLength = testimonials.length;
let curVal = 0;

function moveNext() {
  if (curVal === maxLength - 1) curVal = 0;
  else {
    curVal++;
  }
  moveSlide(curVal);
}
nextBtn.forEach((i) => {
  i.addEventListener("click", moveNext);
});

function movePrev() {
  if (curVal === 0) curVal = maxLength - 1;
  else {
    curVal--;
  }
  moveSlide(curVal);
}
preBtn.forEach((i) => {
  i.addEventListener("click", movePrev);
});

function moveSlide(curIndex) {
  testimonials.forEach((item, i) => {
    item.style.transform = `translateX(${100 * (i - curIndex)}%)`;
    item.style.transition = "0.5s";
  });
}

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "ArrowRight") moveNext();
  if (e.key === "ArrowLeft") movePrev();
});
