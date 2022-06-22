/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const startButton = document.querySelector("#btn__reset");
const keyButtons = document.querySelectorAll('.key');
    
startButton.addEventListener("click", function(){
    game.resetGame();
    game.startGame();
    
}); 

// const clicking = function() { 
//    game.handleInteraction(this);
   
// }

//keyButtons.forEach(btn => btn.addEventListener("click", clicking));

keyButtons.forEach(btn => btn.addEventListener("keyup", function() {
    game.handleInteraction(this);
}));





