const getAllNotes = () => {
  return globalThis
    .fetch(`${import.meta.env.VITE_URL}/notes`, {
      method: "GET",
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data.notes;
    });
};

export default getAllNotes;
