// select all cards
const cards = document.querySelectorAll(".card");

// attach event listeners
cards.forEach((card) => {
  // select video inside the card
  const video = document.querySelector("video");
  card.addEventListener("mouseover", () => video.play());
  card.addEventListener("mouseleave", () => video.pause());
});

// Dark-Mode toggle
const colorModeSwitch = document.querySelector("#color-mode-switch");
const sunIcon = "bx-sun";
const moonIcon = "bx-moon";

colorModeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // change Icon depending on Dark/Light mode
  if (colorModeSwitch.classList.contains(moonIcon)) {
    colorModeSwitch.classList.remove(moonIcon);
    colorModeSwitch.classList.add(sunIcon);
  } else {
    colorModeSwitch.classList.add(moonIcon);
    colorModeSwitch.classList.remove(sunIcon);
  }
});
