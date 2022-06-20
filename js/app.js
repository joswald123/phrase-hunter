/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
//const phrase = new Phrase()

// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase ${phrase.phrase}`)
// })

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };

// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
//console.log(`Phrase - phrase: ${phrase.phrase}`)

// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();
// game.getRandomPhrase().addPhraseToDisplay();

// game.startGame();



const startButton = document.querySelector("#btn__reset");

startButton.addEventListener("click", function(){
    game.startGame();  

    
});