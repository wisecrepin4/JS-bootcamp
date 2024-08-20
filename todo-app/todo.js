const todos = [
  {
    text: "Order cat food",
    completed: true,
  },
  {
    text: "Clean Kitchen",
    completed: false,
  },
  {
    text: "Buy food",
    completed: true,
  },
  {
    text: "Do Work",
    completed: false,
  },
  {
    text: "Exercise",
    completed: true,
  },
];
let filters = {
  search: "",
};

let filterfunction = function (todos, filters) {
  let filtered = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(filters.search.toLowerCase());
  });
  document.querySelector("#todoholder").innerHTML = "";
  filtered.forEach(function (filter) {
    let foundtodo = document.createElement("p");
    foundtodo.textContent = filter.text;
    document.querySelector("#todoholder").appendChild(foundtodo);
  });
};
document.querySelector("#newinput").addEventListener("input", (e) => {
  filters.search = e.target.value;
  filterfunction(todos, filters);
});

let remained = 0;
remained = todos.filter((todo) => {
  return !todo.completed;
}).length;

let newp = document.createElement("h1");
newp.textContent = `you are remaining with ${remained} tasks to do`;
document.querySelector("#todoholder").appendChild(newp);

document.querySelector("#clickme").addEventListener("click", (e) => {
  console.log("I am adding an element to the console");
});
