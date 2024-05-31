const deleteNote = (id) => {
  return fetch(`${import.meta.env.VITE_URL}/notes/${id}`, { method: "DELETE" });
};

export default deleteNote;
