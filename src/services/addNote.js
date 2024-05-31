const addNote = (newNote) => {
  return globalThis
    .fetch(`${import.meta.env.VITE_URL}/notes`, {
      method: "POST",
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

export default addNote;
