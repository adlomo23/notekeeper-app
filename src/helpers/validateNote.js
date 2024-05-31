import validateEnum from "./validation/validateEnum";
import validateNonEmpty from "./validation/validateNonEmpty";
import validateType from "./validation/validateType";

const validateNote = (note) => {
  const validations = [
    {
      isValid:
        validateEnum(note.status) &&
        validateNonEmpty(note.status) &&
        validateType(note.status, "string"),
      message: "Status is not valid enum",
    },
    {
      isValid: validateNonEmpty(note.name) && validateType(note.name, "string"),
      message: "Name is not correct",
    },
    {
      isValid:
        validateNonEmpty(note.description) &&
        validateType(note.description, "string"),
      message: "Description is not correct",
    },
    {
      isValid:
        validateNonEmpty(note.important) &&
        validateType(note.important, "boolean"),
      message: "Important is not correct",
    },
    {
      isValid: validateNonEmpty(note.date) && validateType(note.date, "string"),
      message: "Date is not correct",
    },
  ];

  const failedValidations = validations.filter(
    (validation) => !validation.isValid
  );

  if (failedValidations.length > 0) {
    failedValidations.forEach((validation) => {
      console.log(validation.message);
    });
    return false;
  }
  return true;
};

export default validateNote;
