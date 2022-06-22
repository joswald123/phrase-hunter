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
        const phrases = [new Phrase("Hello world"),
                         new Phrase("Life is great"),
                         new Phrase("Everything is fine")
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

    resetGame () {
        const ul = document.querySelector("#phrase ul");
        const hearts = document.querySelectorAll(".tries img");
        ul.innerHTML = "";
        const buttons = document.querySelectorAll(".key");
        console.log(buttons)
        buttons.disabled = false;
        buttons.forEach(btn => btn.className = 'key')
        hearts.forEach(heart => heart.src = 'images/liveHeart.png')

    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(btn) {
        btn.disabled = true;
        const phrase = new Phrase(this.activePhrase.phrase);
        if(phrase.checkLetter(btn.innerText)){
            btn.className = "chosen";
            phrase.showMatchedLetter(btn.innerText);
            if(this.checkForWin()){
                this.gameOver(true)
            }
            
        } else {
            btn.className = "wrong";
            this.removeLife()
        }
    
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        let showList = document.querySelectorAll(".show")
        let newPhrase = this.activePhrase.phrase.replace(/\s+/g, '')
        //console.log(newPhrase.length)
        //console.log(showList.length)
        if(showList.length === newPhrase.length){
            return true
        }
        return false
        
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
        if( this.missed >= 5) {
            this.gameOver(false);
        }
    }
    
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const screenOverlay = document.querySelector("#overlay")
        const message = document.querySelector("#game-over-message")

        if(gameWon){
            screenOverlay.style.display = "";
            screenOverlay.className = "win";
            message.innerHTML = "Great job!"
            
        } else {
            screenOverlay.style.display = "";
            screenOverlay.className = "lose";
            message.innerHTML = "Sorry, better luck next time!"
        
        }
        
    }
}