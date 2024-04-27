const tabs = document.querySelectorAll(".tab");
const boxes = document.querySelectorAll(".box");
const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");
const tab4 = document.querySelector(".tab4");

const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const box4 = document.getElementById("box-4");

tab1.addEventListener("click", () => {
  box1.classList.add("show");
  box2.classList.remove("show");
  box3.classList.remove("show");
  box4.classList.remove("show");
});
tab2.addEventListener("click", () => {
  box2.classList.add("show");
  box1.classList.remove("show");
  box3.classList.remove("show");
  box4.classList.remove("show");});
tab3.addEventListener("click", () => {
  box3.classList.add("show");
  box1.classList.remove("show");
  box2.classList.remove("show");
  box4.classList.remove("show");
});
tab4.addEventListener("click", () => {
  box4.classList.add("show");
  box1.classList.remove("show");
  box2.classList.remove("show");
  box3.classList.remove("show");
});

tabs.forEach((element) => {
  element.addEventListener("click", () => {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    element.classList.add("active");
  });
});
