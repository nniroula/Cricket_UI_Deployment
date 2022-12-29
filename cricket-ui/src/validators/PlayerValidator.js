import { RETRIEVE_ADMINS_URL } from "../components/Constant";
import axios from "axios";
import logInTracker from "../components/auth/loginTracker";

const PlayerValidator = async (player) => {
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
            if(data[adminUser].email === player.email){
                adminEMails.push(email_in_db);
            }
            if(user_name === player.username){
                adminUsernames.push(user_name);
            }
            if(user_name === loggedInUser.username){
                emailOfLoggedInUser = email_in_db;
            }
     
        }
    }).catch(error => console.error(error));

    if(player.first_name.length < 2){
        errors.first_name = "Minimum length is 2.";
    }else if(!names_regex.test(player.first_name)){
        errors.first_name = 'Contains only letters.';
    }

    if(player.last_name.length < 2){
        errors.last_name = "Minimum length is 2.";
    }else if(!names_regex.test(player.last_name)){
        errors.last_name = 'Contains only letters.';
    }

    if(player.username.length < 2){
        errors.username = "Minimum length is 2.";
    }else if(!username_regex.test(player.username)){
        errors.username = 'Letters followed by 0 or more numbers.';
    }
    else if ((loggedInUser.username !== player.username) && adminUsernames.includes(player.username)){
        errors.username = 'Username is taken! Use a different one.';
    }

    if(!phone_regex.test(player.phone_number)){
        errors.phone_number = "Phone format is 123-456-7890";
    }

    if(((emailOfLoggedInUser !== player.email) && adminEMails.includes(player.email))){
        errors.email = 'Email is taken! Use a different one.';
    }

    // if(!admin.password){
    //     errors.password = "Invalid password. Can't update here";
    // }

    return errors;
}

export default PlayerValidator;