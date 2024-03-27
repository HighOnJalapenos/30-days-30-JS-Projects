window.addEventListener("keydown", (e) => {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!sound) return;
  key.classList.add("playing");
  sound.currentTime = 0;
  sound.play();
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return;
    key.classList.remove("playing");
  });
});
