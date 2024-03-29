const inputs = document.querySelectorAll(".controls input");

function handleUpdate(e) {
  const suffix = e.target.dataset.sizing || "";
  const { name, value } = e.target;
  document.documentElement.style.setProperty(`--${name}`, value + suffix);
}

inputs.forEach((input) => input.addEventListener("input", handleUpdate));
