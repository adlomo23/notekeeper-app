const validateNonEmpty = (value) => {
    if (value != null && value != ""){
        return true;
    }
    return false;
}

export default validateNonEmpty;