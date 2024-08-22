let noteId = location.hash.substring(1);
notes = retrieve();
let Note = notes.find((note) => {
  return note.id == noteId;
});
if (Note) {
  document.querySelector("#notetitle").value = Note.title;
  document.querySelector("#notedetail").value = Note.details;

  document.querySelector("#lastEdited").textContent = generateLastEdited(
    Note.updatedAt
  );
}

document.querySelector("#notetitle").addEventListener("input", (e) => {
  Note.title = e.target.value;
  Note.updatedAt = moment().valueOf();
  document.querySelector("#lastEdited").textContent = generateLastEdited(
    Note.updatedAt
  );
  saveNotes();
});

document.querySelector("#notedetail").addEventListener("input", (e) => {
  Note.details = e.target.value;
  Note.updatedAt = moment().valueOf();
  document.querySelector("#lastEdited").textContent = generateLastEdited(
    Note.updatedAt
  );

  saveNotes();
});
document.querySelector("#removenote").addEventListener("click", (e) => {
  removenote(noteId);
  saveNotes();
  location.assign("notes.html");
});
window.addEventListener("storage", (e) => {
  if (e.key == "notes") {
    notes = JSON.parse(e.newValue);
  }

  let Note = notes.find((note) => {
    return note.id == location.hash.substring(1);
  });

  Note = notes.find((note) => {
    return note.id == noteId;
  });
  if (Note) {
    document.querySelector("#notetitle").value = Note.title;
    document.querySelector("#notedetail").value = Note.details;
  }
});
