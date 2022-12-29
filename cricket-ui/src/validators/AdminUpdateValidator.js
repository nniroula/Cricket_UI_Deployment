import { RETRIEVE_ADMINS_URL } from "../components/Constant";
import axios from "axios";
import logInTracker from "../components/auth/loginTracker";

const AdminUpdateValidator = async (admin) => {
    const errors = {};
    let adminUsernames = [];
    let adminEMails = [];
    let adminData = [];
    const loggedInUser = logInTracker();
    let emailOfLoggedInUser = '';

    const url = RETRIEVE_ADMINS_URL;
    const names_regex = new RegExp("^[a-zA-Z]+$");
    const username_regex = new RegExp("^[a-zA-Z]+$|^[a-zA-Z]+[0-9]+$");
    const phone_regex =  new RegExp("^[1-9]\\d{2}-\\d{3}-\\d{4}$");

    await axios.get(url).then((response) => {
        const data = response.data;
        for(let adminUser in data){
            adminData.push(data[adminUser]);
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

    // if(!admin.password){
    //     errors.password = "Invalid password. Can't update here";
    // }

    return errors;
}

export default AdminUpdateValidator;