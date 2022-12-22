const PasswordValidator = (password) => {
    if(password === undefined || password === ''){
        return 'Password is required';
    }
    return false;
}

export default PasswordValidator;