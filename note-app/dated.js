let firstDate = new Date("January, 22, 2003");
let secondDate = new Date("January, 22, 2025");

console.log(
  firstDate.getTime() < secondDate.getTime()
    ? firstDate.toString()
    : secondDate.toString()
);
console.log(firstDate.getTime());
