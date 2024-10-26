class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase();
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = "playing";
  }

  showRemaining() {
    return this.remainingGuesses;
  }

  makeGuess(guess) {
    if (typeof guess !== "string") {
      console.log(`${typeof guess}`);
    } else if (this.guessedLetters.includes(guess)) {
      console.log("already inputed input");
    } else {
      this.guessedLetters.push(guess);
    }
    if (!this.word.split("").includes(guess)) {
      this.remainingGuesses--;
    }

    this.statusRenew();
    console.log(this.status);
  }

  get Puzzle() {
    let msg = "";
    let wordGame = this.word;
    if (!this.guessedLetters) {
      msg = "No guesses? ==> ";
      wordGame.split("").forEach((letter) => {
        if (letter == " " || letter == "   " || letter == "    ") {
          msg = msg + letter;
        } else {
          msg = msg + "*";
        }
      });
    } else {
      msg = "Guessed";
      this.guessedLetters.forEach((letter) => {
        msg = msg + `"${letter}"`;
      });
      msg = msg + "? -> ";
      wordGame.split("").forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {
          msg = msg + `${letter}`;
        } else if (letter == " " || letter == "   " || letter == "    ") {
          msg = msg + letter;
        } else {
          msg = msg + "*";
        }
      });
    }
    return msg;
  }

  statusRenew() {
    let allGuessed = this.word
      .split("")
      .every((letter) => this.guessedLetters.includes(letter) || letter == " ");

    if (allGuessed == true) {
      this.status = "finished";
    } else if (allGuessed == false && this.remainingGuesses > 0) {
      this.status = "playing";
    } else {
      this.status = "failed";
    }
  }

  get StatusMessage() {
    if (this.status == "playing") {
      return `${this.status} --> Guesses left: ${this.remainingGuesses}`;
    } else if (this.status == "failed") {
      return `${this.status} -->Nice try ! the word was "${this.word}"`;
    } else {
      return "Great work! You guessed the word.";
    }
  }
}

const displayCountry = (country) => {
  console.log(country);
};

getCountry("RW", displayCountry);
