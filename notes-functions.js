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
//first sorting the given variables
const sorting = (notes, sortby) => {
  if (sortby == "option1") {
    notes = notes.sort((a, b) => {
      // console.log(a.updatedAt, b.updatedAt);
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
    return notes;
  } else if (sortby == "option2") {
    notes = notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
    return notes;
  } else if (sortby == "option3") {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else return 0;
    });
  }
};

const rendernotes = (notes, filters) => {
  document.querySelector("#notesDom").textContent = "";
  notes = sorting(notes, filters.sortBy);
  let filtered = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.search.toLowerCase())
  );
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

//Generate the last edited message

const generateLastEdited = (NoteupdatedAt) =>
  `last updated:${moment(NoteupdatedAt).fromNow()}`;
