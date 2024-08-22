notes = retrieve();
let filters = {
  search: "",
  sortBy: document.querySelector("#sortoption").value,
};

document.querySelector("#sortoption").addEventListener("change", (e) => {
  filters.sortBy = e.target.value;
  rendernotes(notes, filters);
});
rendernotes(notes, filters);
document.querySelector("#createNt").addEventListener("click", () => {
  let id = uuidv4();
  const timestamp = moment().valueOf();
  notes.push({
    id: id,
    title: "unnamed note",
    details: "",
    createdAt: timestamp,
    updatedAt: timestamp,
  });
  saveNotes();
  location.assign(`edit.html#${id}`);
});

document.querySelector("input").addEventListener("input", (e) => {
  filters.search = e.target.value;
  document.querySelector("div").innerHTML = "";
  rendernotes(notes, filters);
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = retrieve();
  }
  rendernotes(notes, filters);
});
