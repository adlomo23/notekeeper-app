export const NoteInfo = ({ note }) => {
  return (
    <span>
      Name : {note.name} | Description : {note.description} | Important :{" "}
      {note.important ? "Yes" : "No"} | Status : {note.status} | Due Date :{" "}
      {note.date}
    </span>
  );
};
