import getAllNotes from "./services/getNotes.js";
import addNote from "./services/addNote.js";
import { NoteList } from "./components/NotesList.jsx";
import { useState, useEffect } from "react";
import { Form } from "./components/CreateNoteForm";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await getAllNotes();
        setNotes(fetchedNotes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Notekeeper App</h1>
      <Form notes={notes} setNotes={setNotes} addNote={addNote} />

      <NoteList notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
