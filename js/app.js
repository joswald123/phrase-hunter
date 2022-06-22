/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const startButton = document.querySelector("#btn__reset");
const keyButtons = document.querySelectorAll('.key');
    
startButton.addEventListener("click", function(){
   game.startGame();
   game.resetGame();
    // const ul = document.querySelector("#phrase ul");
    // const hearts = document.querySelectorAll(".tries img");
    // ul.innerHTML = "";
    // const buttons = document.querySelectorAll(".key");
    // console.log(buttons)
    // buttons.disabled = false;
    // buttons.forEach(btn => btn.className = 'key')
    // hearts.forEach(heart => heart.src = 'images/liveHeart.png')
    
}); 

// const clicking = function() { 
//    game.handleInteraction(this);
   
// }

//keyButtons.forEach(btn => btn.addEventListener("click", clicking));

keyButtons.forEach(btn => btn.addEventListener("click", function() {
    game.handleInteraction(this);
}));





