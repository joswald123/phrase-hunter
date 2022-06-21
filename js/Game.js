/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /** 
    * Creates new Phrases objects
    * @return  {array} An array of phrases objects.
    */

    createPhrases() {
        const phrases = [new Phrase("The greatest glory in living lies not in never falling, but in rising every time we fall"),
                         new Phrase("Life is what happens when you're busy making other plans"),
                         new Phrase("Tell me and I forget. Teach me and I remember. Involve me and I learn")
                        ];
      
        return phrases;
    }

    /**
     * Select random prase from phrases property
     * @return {object} phrase object chosen to be used
     */

    getRandomPhrase() {
        let randomPhrase = Math.floor(Math.random() * this.phrases.length);
        let randomObjectPhrase = this.phrases[randomPhrase];
        return randomObjectPhrase;
    }
    
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        
        const screenOverlay = document.querySelector("#overlay")
        
        screenOverlay.style.display = "none";
        const phrase = new Phrase(this.getRandomPhrase().phrase)
        this.activePhrase = phrase;
        phrase.addPhraseToDisplay(this.activePhrase);
    }

    handleInteraction() {

    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {

        if(phrase.checkLetter(this.activePhrase)){
            return true
        } else {
            return false
        }
        
    
        // if(this.activePhrase === ){
        //     return true;
        // } else {
        //     return false;
        // }


    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const hearts = document.querySelectorAll(".tries img");
        hearts[this.missed].setAttribute("src", "images/lostHeart.png")
        this.missed += 1
        console.log(this.missed)
        if( this.missed >= 5) {
            console.log("Game over")
        }
    }
    
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver() {

    }
}