let tipCalculator = function (total = 0 ,tipPercent = 0.2){
  let tip = total * tipPercent ;
return (`A tip of ${tipPercent *  100}% on $${total} would be ${tip}`);
}
 console.log (tipCalculator(100));
console.log( tipCalculator()); 