import { Note } from "./Note";
import { DeleteButton } from "./DeleteButton.jsx";
import { EditButton } from "./EditButton.jsx";

export const NoteList = ({ setNotes, notes }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          <Note note={note} setNotes={setNotes} />
          <DeleteButton note={note} setNotes={setNotes} />
          <EditButton note={note} setNotes={setNotes}/>

        </li>
      ))}
    </ul>
  );
};
