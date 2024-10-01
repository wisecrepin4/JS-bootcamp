// const tip = (perc) => {
//   return (amount) => {
//     return amount * perc;
//   };
// };

// let tip15 = tip(0.15);
// console.log(tip15(100));

// let tip20 = tip(0.2);
// console.log(tip20(100));

let Mypromise = new Promise(() => {
  reject("user enter two types of words");
});

Mypromise.then((data) => {
  console.log(data);
});
