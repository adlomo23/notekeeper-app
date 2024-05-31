/**
 * Compares whether the entered value is the expected value
 * @param {any} value 
 * @param {string} type 
 * @returns {boolean} 
 */

const validateType = (value, type) => {
    if (typeof(value) === type){
        return true;
    }

    return false;
};

export default validateType
