function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

/* Scroll Reveal */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* Skill Percentage Animation */
document.querySelectorAll(".circle").forEach(circle => {
  const percent = circle.dataset.percent;
  let count = 0;
  const span = circle.querySelector("span");

  const interval = setInterval(() => {
    if (count >= percent) {
      clearInterval(interval);
    } else {
      count++;
      span.textContent = count + "%";
    }
  }, 20);
});
