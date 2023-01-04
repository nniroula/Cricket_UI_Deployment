import { PLAYERS_URL } from "../components/Constant";
import axios from "axios";

const PlayerValidator = async (player) => {
    const errors = {};
    let playerEMailsInDB = [];
    let phoneInDB = '';
    const url = PLAYERS_URL; 

    const names_regex = new RegExp("^[a-zA-Z]+$");
    const phone_regex =  new RegExp("^[1-9]\\d{2}-\\d{3}-\\d{4}$");  
    const date_regex = new RegExp("^(1[0-2]|0[1-9])[/](3[01]|[12][0-9]|0[1-9])[/][0-9]{4}$");
    const playing_role_regex = new RegExp("^[a-zA-Z]+([\\s]?[a-zA-Z])*$");
    const emergency_contact_regex = new RegExp("^[a-zA-Z]+([\\s]?[a-zA-Z])*$");
    const email_regex = new RegExp("^([\\w.-]+)@([\\w-]+)((\\.(\\w){2,6})+)$");

    await axios.get(url).then((response) => {
        const data = response.data;
        for(let playerInDB in data){
            let email_in_db = data[playerInDB].email;
            if(data[playerInDB].email === player.email){
                playerEMailsInDB.push(email_in_db);
            }
            if(data[playerInDB].phone_number === player.phone_number){
                phoneInDB = data[playerInDB].phone_number;
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

    if(!email_regex.test(player.email)){
        errors.email = "Invalid email format!"
    }else if(playerEMailsInDB.includes(player.email)){
        errors.email = "Email is taken! Use a different one."
    }

    if(!phone_regex.test(player.phone_number)){
        errors.phone_number = "Phone format is 123-456-7890";
    }else if(phoneInDB){
        errors.phone_number = "Phone is taken! Use different one.";
    }

    if(!date_regex.test(player.birth_date)){
        errors.birth_date = "Date format is 05/24/1987";
    }

    if(!date_regex.test(player.registered_date)){
        errors.birth_date = "Date format is 05/24/1987";
    }

    if(!playing_role_regex.test(player.playing_role)){
        errors.playing_role = 'Invalid input!';
    }

    if(!emergency_contact_regex.test(player.emergency_contact)){
        errors.emergency_contact = 'Contains only letters.';
    }

    return errors;
}

export default PlayerValidator;