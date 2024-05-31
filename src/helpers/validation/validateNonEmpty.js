
/**
 * Compare that it is not empty
 * @param {any} value 
 * @returns {boolean}
 */
const validateNonEmpty = (value) => {
    if (value != null && value != ""){
        return true;
    }
    return false;
}

export default validateNonEmpty;