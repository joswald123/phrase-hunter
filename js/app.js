/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const startButton = document.querySelector("#btn__reset");
const keyButtons = document.querySelectorAll(".key");
const title = document.querySelector(".title");
const stringTitle = title.textContent;
const splitTitle = stringTitle.split("");
title.textContent = "";

/**
 * Event Listener 'click'
 * Starts & reset the Game.
 */
startButton.addEventListener("click", function () {
  game.resetGame();
  game.startGame();
});

/**
 * Event Listener 'click'
 * listen onscreen keyboard button clicks
 */
keyButtons.forEach((btn) =>
  btn.addEventListener("click", function () {
    game.handleInteraction(this);
  })
);

/**
 * Event Listener 'keyup'
 * listen keyup events
 * @param (events)
 */
document.addEventListener("keyup", function (e) {
  game.handleKeyPress(e.key);
});

/**
 * Iterates each each letter of the title and create an span for each letter
 */
for (let i = 0; i < splitTitle.length; i++) {
  title.innerHTML += `<span>${splitTitle[i]}</span>`;
}

let count = 0;
let timer = setInterval(onTime, 50);

/**
 * onTimeFunction
 * Iterate each span created in title by increasing the counter & passing a class fade that gives specific css styles
 * Change dynamically color of each span 
 * @return (timer)
 */
function onTime() {
  const span = title.querySelectorAll("span")[count];
  span.classList.add("fade");
  
  count++;
  if (count === splitTitle.length) {
    complete();
    return;
  }
}

/**
 * Complete function
 * clears the interval & set up the timer 
 */
function complete() {
  clearInterval(timer);
  timer = null;
}
