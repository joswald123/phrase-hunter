/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  
  /**
  * Display phrase on game board
  */
  addPhraseToDisplay() {
    let displayPhrase = document.querySelector("#phrase ul");
    let htmlPhrase = "";

    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase[i] === " ") {
        htmlPhrase += `<li class="space"> </li>`;
      } else {
        htmlPhrase += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
      }
    }
    return (displayPhrase.innerHTML = htmlPhrase);
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    if(this.phrase.includes(letter)){
      return true;  
    }
    return false; 
  
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
      const showLi = document.getElementsByClassName(letter);
      for(let i = 0; i < showLi.length; i++){
        showLi[i].className = `show letter ${letter}`
      }

      //showLi.from(showLi).forEach(element => element.className = `show letter ${letter}`);
  }
}
