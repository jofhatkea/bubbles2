window.addEventListener("load", () => {
  setupCircles();
})

function setupCircles() {
  const cs = document.querySelectorAll("div");
  cs.forEach(el => {
    el.style.transform = `translate(${Math.random()*100}vw,${Math.random()*100}vh)`;
    el.addEventListener("mouseover", c => {
      el.style.background = `hsl(${Math.random()*360},70%,70%)`;
      el.style.transform = `translate(${Math.random()*100}vw,${Math.random()*100}vh)`;
    })
  })

}
