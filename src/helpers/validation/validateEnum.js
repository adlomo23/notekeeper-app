const validateEnum = (value) => {
  if (value === "Pending" || value == "In Progress" || value === "Done") {
    return true;
  }
  return false;
};

export default validateEnum;
