const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours() % 12;
  const secDeg = (second / 60) * 360 + 90;
  const minDeg = (minute / 60) * 360 + 90;
  const hourDeg = (hour / 12) * 360 + 90;
  secondHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

const timerId = setInterval(setDate, 1000);

window.addEventListener("beforeunload", () => clearInterval(timerId));
