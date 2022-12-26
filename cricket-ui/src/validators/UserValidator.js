import { RETRIEVE_ADMINS_URL } from "../components/Constant";

const UserValidator = (user) => {
    const errors = {};

    const names_regex = new RegExp("^[a-zA-Z]+$");
    const username_regex = new RegExp("^[a-zA-Z]+$|^[a-zA-Z]+[0-9]+$");
    const phone_regex =  new RegExp("^[1-9]\\d{2}-\\d{3}-\\d{4}$");

    if(user.first_name.length < 2){
        errors.first_name = "Minimum length is 2.";
    }else if(!names_regex.test(user.first_name)){
        errors.first_name = 'Contains only letters.';
    }

    if(user.last_name.length < 2){
        errors.last_name = "Minimum length is 2.";
    }else if(!names_regex.test(user.last_name)){
        errors.last_name = 'Contains only letters.';
    }

    if(user.username.length < 2){
        errors.username = "Minimum length is 2.";
    }else if(!username_regex.test(user.username)){
        errors.username = 'Contains only letters and numbers.';
    }
    // else{
    //     errors.username = 'Use different username.';
    // }

    if(!phone_regex.test(user.phone_number)){
        errors.phone_number = "Phone format is 123-456-7890";
    }

    return errors;
}

export default UserValidator;