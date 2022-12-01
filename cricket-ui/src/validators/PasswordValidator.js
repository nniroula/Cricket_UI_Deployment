const PasswordValidator = (password) => {
    // const errors = [];

    if(password === undefined || password === ''){
        // errors.password = 'Password is required.'
        // errors.push('Password is required');
        return 'Password is required';
    }
    // return errors;
    return false;
}

export default PasswordValidator;