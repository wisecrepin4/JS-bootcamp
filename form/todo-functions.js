//fetch existinig todos from localstorage
let todos = [];
function retrieve(todos) {
  if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

//save todos to localstorage

let savetodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

let removetodo = (id) => {
  let index = todos.findIndex((todo) => {
    return id === todo.id;
  });
  if (index != -1) {
    todos.splice(index, 1);
  }
};
let changeCheckStatus = (id, e) => {
  let index = todos.findIndex((todo) => {
    return todo.id === id;
  });
  if (index != -1) {
    todos[index].completed = e.target.checked;
  }
};
//get the DOM elements for an individual note

let generateToDom = (filt) => {
  let todocontainer = document.createElement("div");

  todocontainer.className = "todocontainer";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = filt.completed;
  todocontainer.appendChild(checkbox);
  checkbox.addEventListener("change", (e) => {
    changeCheckStatus(filt.id, e);
    savetodos();
    rendertodos(todos, filters);
  });

  let todotext = document.createElement("span");
  todotext.innerText = filt.text;
  todocontainer.appendChild(todotext);
  let deletebtn = document.createElement("button");
  deletebtn.innerText = "x";
  todocontainer.appendChild(deletebtn);
  document.querySelector("#todoholder").appendChild(todocontainer);

  deletebtn.addEventListener("click", () => {
    removetodo(filt.id);
    savetodos();
    rendertodos(todos, filters);
  });
};

//get the dom elements for list summary
let generateSummaryDom = (filtered) => {
  let summary = document.createElement("h1");
  summary.innerText = `you have ${filtered.length} tasks to finish`;
  document.querySelector("#todoholder").appendChild(summary);
};

//render application todos based on filters
let rendertodos = function (todos, filters) {
  document.querySelector("#todoholder").innerHTML = "";

  let filtered = todos.filter((todo) => {
    let valuematch = todo.text
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    let checkoutput = !todo.completed || filters.checkbox;

    return valuematch && checkoutput;
  });
  filtered.forEach((filt) => {
    generateToDom(filt);
  });
  generateSummaryDom(
    filtered.filter((filt) => {
      return filt.completed == false;
    })
  );
};
