const game1 = new Hangman("car parts", 2);
const game2 = new Hangman("New Jersey", 4);

let reveal1 = document.createElement("p");
reveal1.textContent = `${game1.Puzzle}`;
document.querySelector(".puzzleHolder").appendChild(reveal1);

let nbrGuesses1 = document.createElement("p");
nbrGuesses1.textContent = `${game1.showRemaining()}`;
document.querySelector(".puzzleHolder").appendChild(nbrGuesses1);
/*
let reveal2 = document.createElement("p");
reveal2.textContent = `${game2.getPuzzle()}`;
document.querySelector(".gameHolder").appendChild(reveal2);

let nbrGuesses2 = document.createElement("p");
nbrGuesses2.textContent = `${game2.showRemaining()}`;
document.querySelector(".gameHolder").appendChild(nbrGuesses2);
*/
//console.log(game2.getPuzzle());

window.addEventListener("keypress", (e) => {
  if (game1.status === "playing") {
    let guess = e.key;
    game1.makeGuess(guess);
  }

  //or use guess = string.fromCharCode(e.charCode);

  //game2.makeGuess(guess);
  reveal1.textContent = game1.Puzzle;
  document.querySelector(".gameHolder").textContent = "";

  let statusMes = document.createElement("p");
  statusMes.textContent = game1.StatusMessage;
  document.querySelector(".gameHolder").appendChild(statusMes);

  nbrGuesses1.textContent = game1.showRemaining();
  /*
  reveal2.textContent = game2.getPuzzle();
  nbrGuesses2.textContent = game2.showRemaining();
  //console.log(game2.getPuzzle());
  */
});

getCountry("RW");

getPuzzle(3);

//.then(
//   (data) => {
//     console.log(data);
//   },
//   (data) => {
//     console.log(data);
//   }
// );
//

getlocation();
