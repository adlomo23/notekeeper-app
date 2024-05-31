const editNote = (newNote) => {
  return globalThis
    .fetch(`${import.meta.env.VITE_URL}/notes/${newNote.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    });
};

export default editNote;
