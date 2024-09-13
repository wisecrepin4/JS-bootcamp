const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase();
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
};
Hangman.prototype.makeGuess = (guess) => {
  if (typeof guess !== "string") {
    console.log(`${guess}`);
  } else if (this.guessedLetters.includes(guess)) {
    console.log("already inputed input");
  } else {
    this.guessedLetters.add(guess);
    this.remainingGuesses = remainingGuesses - 1;
  }
};

Hangman.prototype.getPuzzle = function () {
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
};
const game1 = new Hangman("cat", 2);
console.log(game1.getPuzzle());

const game2 = new Hangman("New Jersey", 4);
console.log(game2.getPuzzle());

document.querySelector("#guess").addEventListener("submit", (e) => {
  e.preventDefault();
  let guess = document.getElementById("in").value;

  console.log(guess);
  game1.makeGuess(guess);
  game2.makeGuess(guess);
});
