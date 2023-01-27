// Button with numbers
let prevButton = null;
const submitBtn = document.querySelector(".btn-long");
const btn = document.querySelector(".number");
btn.addEventListener("click", (e) => {
  const isButton = e.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  e.target.classList.add("active");

  if (prevButton !== null) {
    prevButton.classList.remove("active");
  }

  prevButton = e.target;
  var x = prevButton.innerHTML;
  document.querySelector(".rating").innerHTML =
    "You selected " + x + " out of 5";
});

submitBtn.addEventListener("click", () => {
  document.querySelector(".container-main").style.display = "none";
  document.querySelector(".container-thank").style.display = "block";
});
