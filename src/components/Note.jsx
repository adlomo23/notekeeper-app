import React from "react";
import {NoteInfo} from "./NoteInfo";

export const Note = ({ note, setNotes }) => {
  return (
        <NoteInfo note={note} />
  );
};
