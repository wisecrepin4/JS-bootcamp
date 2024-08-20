let person = {
  name : 'Andrew',
  age : 27,
  location : 'Philadephia'
};
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
person.age ++;
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);


let returnFunction = function (fahr){

  return ({
    fahr:`${fahr}`, 
    celcius:` ${(fahr - 32) * 5/9}`,
    kelvin: `${(fahr - 32) * 5/9 + 273} `
  });
}
let returnedObject = returnFunction(32);
console.log(returnedObject);