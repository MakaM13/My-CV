// Dark / Light Mode Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Progress Circle Animation
document.querySelectorAll(".progress-circle circle:nth-child(2)").forEach(circle => {
  let value = circle.dataset.value;
  let radius = circle.r.baseVal.value;
  let circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = circumference;
  let offset = circumference - (value / 100) * circumference;
  setTimeout(() => { circle.style.strokeDashoffset = offset; }, 500);
});
