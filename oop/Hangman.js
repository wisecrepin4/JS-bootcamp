const Hangman = function (word, guesses) {
  this.word = word;
  this.guesses = guesses;
  this.guessed = guessed;
};

Hangman.prototype. mklcarr= function(){
  return ((this.word).tolowerCase()).split('');
  
}
Hangman.prototype.puzzle = function (gue){
  let foundarr = '';
  this.mklcarr();
  let wordarr = this.mklcarr();
  
    let found = wordarr.find(() => {
      return wordarr == gue.toLowerCase();
    })
  foundarr += found;
  if (foundarr!=='' ){
    
    wordarr.forEach(arr){
      console.log (`Guessed ${foundarr.split('')} ?-> ${gue.toLowerCase()==arr?arr:'*'}`)
    }
  }
  else {
    
    console.log(`No guesses? --> ${wordarr.forEach(() => { console.log('*') });} `);
   }
  }

let game1 = new Hangman("Visualisation", 12,"");
let game2 = new Hangman("Insurbodination", 12,'');

console.log(`game 1 has ${game1.word} and ${game1.guesses}guesses`);
console.log(`game 2 has ${game2.word} and ${game2.guesses} guesses`);
console.log(game1);
