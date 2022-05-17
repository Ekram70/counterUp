const counterBox = document.querySelectorAll(".count");

counterBox.forEach((v) => {
  let data = v.getAttribute("data-count");
  let i = 0;
  let interval = setInterval(() => {
    v.innerText != data ? (v.innerText = i++) : clearInterval(interval);
  });
});
