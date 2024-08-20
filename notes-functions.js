//retrieving notes from local storage
let notes;
let retrieve = () => {
  if (localStorage.getItem("notes") !== null) {
    return JSON.parse(localStorage.getItem("notes"));
  } else {
    return [];
  }
};

//saving data to local storage
let saveNotes = () => {
  localStorage.setItem("notes", JSON.stringify(notes));
};
//removing note
let removenote = (id) => {
  let index = notes.findIndex((note) => {
    return note.id == id;
  });
  if (index !== -1) {
    notes.splice(index, 1);
  }
};
//rendering the Notes

const rendernotes = (notes, filters) => {
  document.querySelector("#notesDom").textContent = "";

  let filtered = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.search.toLowerCase());
  });
  filtered.forEach((filt) => {
    let noteHolder = document.createElement("div");

    let deletebtn = document.createElement("button");
    deletebtn.textContent = "X";

    noteHolder.appendChild(deletebtn);
    deletebtn.addEventListener("click", () => {
      removenote(filt.id);
      saveNotes();
      rendernotes(notes, filters);
    });

    let found = document.createElement("a");

    found.textContent = filt.title;
    found.setAttribute("href", `edit.html#${filt.id}`);

    noteHolder.appendChild(found);
    document.querySelector("#notesDom").appendChild(noteHolder);
  });
};
