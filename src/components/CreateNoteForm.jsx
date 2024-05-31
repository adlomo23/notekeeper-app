import validateNote from "../helpers/validateNote.js";

export function Form({ notes, setNotes, addNote }) {
  function save(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const important = document.getElementById("important").checked;
    const status = document.getElementById("status").value;
    const date = document.getElementById("date").value;

    const newNote = {
      name,
      description,
      important,
      status,
      date,
    };

    if (validateNote(newNote)) {
      addNote(newNote).then((createdNote) => {
        setNotes([...notes, createdNote]);
      });
    } else {
      console.log(
        "La nota que has intentat inserir no ha passat les validacions requerides."
      );
    }
  }

  return (
    <form onSubmit={save}>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" />
      <br />
      <br />
      <label htmlFor="description">Description: </label>
      <input type="text" id="description" />
      <br />
      <br />
      <label htmlFor="important">Important: </label>
      <input type="checkbox" id="important" />
      <br />
      <br />
      <label htmlFor="status">Status: </label>
      <select id="status">
        <option value="Pending">Pending</option>
        <option value="In Progress">In progress</option>
        <option value="Done">Done</option>
      </select>
      <br />
      <br />
      <label htmlFor="date">Date: </label>
      <input type="date" id="date" />
      <br />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}
