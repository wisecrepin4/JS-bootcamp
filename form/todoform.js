"use strict";
todos = retrieve(todos);

let filters = {
  search: "",
  checkbox: false,
};

rendertodos(todos, filters);
document.querySelector("#checkbox").addEventListener("change", (e) => {
  filters.checkbox = e.target.checked;
  rendertodos(todos, filters);
});

document.querySelector("#todoform").addEventListener("submit", (e) => {
  e.preventDefault();
  todos.push({
    id: uuidv4(),
    text: e.target.elements.text.value
      ? e.target.elements.text.value
      : "un named Todo",
    completed: false,
  });

  savetodos();
  e.target.elements.text.value = "";

  rendertodos(todos, filters);
});
document.querySelector("#filtertext").addEventListener("input", (e) => {
  filters.search = e.target.value;
  rendertodos(todos, filters);
});
