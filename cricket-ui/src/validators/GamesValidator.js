import { GAMES_ENDPOINT } from "../components/Constant";
import axios from "axios";

const GamesValidator = async (game) => {
    const errors = {};
    const date_regex = new RegExp("^(1[0-2]|0[1-9])[/](3[01]|[12][0-9]|0[1-9])[/][0-9]{4}$");
    const venue_regex = new RegExp("^[a-zA-Z]+([\\s]?[a-zA-Z])*$");
    const opposition_team_regex = new RegExp("^[a-zA-Z]+([\\s]?[a-zA-Z])*$");
    const time_regex = new RegExp("^([01]?[0-9]|2[0-3]):[0-5][0-9]$");

    const GAMES_RETRIEVE_URL = `${GAMES_ENDPOINT}`;
    let existingMatch = false;

    await axios.get(GAMES_RETRIEVE_URL).then((response) => {
        const games = response.data;
        for(let match of games){
            if(match.game_date === game.game_date && match.game_time === game.game_time){
                existingMatch = true
            }
        }
    }).catch(error => console.error(error));

    if(!date_regex.test(game.game_date)){
        errors.game_date = "Date format is MM/DD/YYYY.";
    }

    if(game.venue.length < 3){
        errors.venue = "Minimum length is 3.";
    }else if(game.venue.length > 30){
        errors.venue = "Maximum length is 30.";
    }else if(!venue_regex.test(game.venue)){
        errors.venue = 'Contains only letters.';
    }

    if(game.opposition_team.length < 3){
        errors.opposition_team = "Minimum length is 3.";
    }else if(game.opposition_team.length > 30){
        errors.opposition_team = "Maximum length is 30.";
    }else if(!opposition_team_regex.test(game.opposition_team)){
        errors.opposition_team = 'Contains only letters.';
    }

    if(!time_regex.test(game.game_time)){
        errors.game_time = "Use military time format - 00:00";
    }

    if(existingMatch){
        errors.conflictedGame = 'Game already exists! Check date and time.'
    }
 
    return errors;
}

export default GamesValidator;

