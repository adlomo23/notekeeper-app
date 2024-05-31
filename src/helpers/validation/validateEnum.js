/**
*Make sure the entered value is between the expected values
 * @param {value} value 
 * @returns {boolean}
 */

const validateEnum = (value) => {
  if (value === "Pending" || value == "In Progress" || value === "Done") {
    return true;
  }
  return false;
};

export default validateEnum;
