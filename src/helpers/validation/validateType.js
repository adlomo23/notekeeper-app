/**
 * 
 * @param {any} value foo
 * @param {string} type foo
 * @returns {boolean} foo
 */

const validateType = (value, type) => {
    if (typeof(value) === type){
        return true;
    }

    return false;
};

export default validateType
