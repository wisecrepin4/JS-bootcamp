let people = [
  {
    name: "Kevin",
    age: 24,
  },
  {
    name: "wise ",
    age: 21,
  },
  {
    name: "Gladys ",
    age: 16,
  },
  {
    name: "Diora ",
    age: 22,
  },
];
console.log(people.find((person) => (person.age = 22)).name);
console.log(people[0].age);
