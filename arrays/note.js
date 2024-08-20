const todos = [
  "order cat food",
  "clean kitchen",
  "buy food",
  "do work",
  "exercise",
];
todos.splice(2, 1);
console.log(todos);
todos.push("working harder");
console.log(todos);
todos.shift("order cat food");
console.log(todos);

todos.forEach(function (task, index) {
  console.log(`${index + 1}.${task}`);
});
