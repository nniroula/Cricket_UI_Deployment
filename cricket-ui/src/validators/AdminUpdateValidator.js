import { RETRIEVE_ADMINS_URL } from "../components/Constant";
import axios from "axios";
import LogInTracker from "../components/auth/LoginTracker";
import bcrypt from 'bcryptjs';

const AdminUpdateValidator = async (admin) => {
    const errors = {};
    let adminUsernames = [];
    let adminEMails = [];
    const loggedInUser = LogInTracker();
    let emailOfLoggedInUser = '';
    let PasswordOfLoggedInAdmin = '';
    const URL = RETRIEVE_ADMINS_URL;
    const URL_FOR_ADMIN_BY_USERNAME = `${URL}/${loggedInUser.username}`;
    const names_regex = new RegExp("^[a-zA-Z]+$");
    const username_regex = new RegExp("^[a-zA-Z]+$|^[a-zA-Z]+[0-9]+$");
    const phone_regex =  new RegExp("^[1-9]\\d{2}-\\d{3}-\\d{4}$");

    await axios.get(URL).then((response) => {
        const data = response.data;
        for(let adminUser in data){
            let user_name = data[adminUser].username;
            let email_in_db = data[adminUser].email;
            if(data[adminUser].email === admin.email){
                adminEMails.push(email_in_db);
            }
            if(user_name === admin.username){
                adminUsernames.push(user_name);
            }
            if(user_name === loggedInUser.username){
                emailOfLoggedInUser = email_in_db;
            }
        }
    }).catch(error => console.error(error));

    await axios.get(URL_FOR_ADMIN_BY_USERNAME).then((response) => {
        const data = response.data;
        PasswordOfLoggedInAdmin = data.password
    }).catch(error => console.error(error));

    if(admin.first_name.length < 2){
        errors.first_name = "Minimum length is 2.";
    }else if(!names_regex.test(admin.first_name)){
        errors.first_name = 'Contains only letters.';
    }

    if(admin.last_name.length < 2){
        errors.last_name = "Minimum length is 2.";
    }else if(!names_regex.test(admin.last_name)){
        errors.last_name = 'Contains only letters.';
    }

    if(admin.username.length < 2){
        errors.username = "Minimum length is 2.";
    }else if(!username_regex.test(admin.username)){
        errors.username = 'Letters followed by 0 or more numbers.';
    }
    else if ((loggedInUser.username !== admin.username) && adminUsernames.includes(admin.username)){
        errors.username = 'Username is taken! Use a different one.';
    }

    if(!phone_regex.test(admin.phone_number)){
        errors.phone_number = "Phone format is 123-456-7890";
    }

    if(((emailOfLoggedInUser !== admin.email) && adminEMails.includes(admin.email))){
        errors.email = 'Email is taken! Use a different one.';
    }

    if(admin.password.length < 6){
        errors.password = "Minimum length is 6.";
    }
    else if(!bcrypt.compareSync(admin.password, PasswordOfLoggedInAdmin)){
        errors.password = "Invalid password!";
    }

    return errors;
}

export default AdminUpdateValidator;