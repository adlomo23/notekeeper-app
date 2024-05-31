import React from "react";
import deleteNote from "../services/deleteNote";
import getAllNotes from "../services/getNotes";

export const DeleteButton = ({ note, setNotes }) => {
  const handlerDelete = (note) => {
    deleteNote(note.id)
      .then(() => getAllNotes())
      .then((notes) => setNotes(notes));
  };

  return (
    <button
      onClick={() => {
        handlerDelete(note);
      }}
    >
      Delete
    </button>
  );
};
