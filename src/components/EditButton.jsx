import React from "react";
import UpdateNoteForm from "../components/UpdateNoteForm";

export const EditButton = ({ note }) => {
  const handlerEdit = (note) => {
    <UpdateNoteForm note={note}/>
    console.log(note.id);
    console.log(<UpdateNoteForm note={note} />);
  };

  return (
    <button
      onClick={() => {
        handlerEdit(note);
      }}
    >
      Edit
    </button>
  );
};
