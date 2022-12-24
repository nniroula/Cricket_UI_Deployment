import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GamesValidator from '../../validators/GamesValidator';
import { GAMES_ENDPOINT } from '../Constant';
import logInTracker from '../auth/loginTracker';
import styles from '../../stylesheet/Games.module.css';

const UpdateGames = ({gameToBeUpdated}) => {
    const navigate = useNavigate();
    const [hasAnyInputError, setHasAnyInputError] = useState(false);
    const [inputError, setInputError] = useState({});
   
    const EXISTING_FORM_DATA = {
        game_date: gameToBeUpdated.game_date,
        venue: gameToBeUpdated.venue,
        opposition_team: gameToBeUpdated.opposition_team,
        game_time: gameToBeUpdated.game_time,
        jwt_token:logInTracker().jwt_token
    };

    const [formData, setFormData] = useState({EXISTING_FORM_DATA});
  
    async function handleSubmit(evt){
        evt.preventDefault();
        const loggedInCredentials = logInTracker();
        let newDate = '';
        let newVenue = '';
        let newOppositionTeam = '';
        let newTime = '';
     
        if(formData.game_date != undefined){
            newDate = formData.game_date;
        }else{
            newDate = gameToBeUpdated.game_date;
        }
        if(formData.venue !== undefined){
            newVenue = formData.venue;
        }else{
            newVenue = gameToBeUpdated.venue;
        }
        if(formData.opposition_team !== undefined){
            newOppositionTeam = formData.opposition_team;
        }else{
            newOppositionTeam = gameToBeUpdated.opposition_team;
        }
        if(formData.game_time !== undefined){
            newTime = formData.game_time;
        }else{
            newTime = gameToBeUpdated.game_time;
        }

        const updatedGame = {
            game_date: newDate,
            venue: newVenue,
            opposition_team: newOppositionTeam,
            game_time: newTime,
            jwt_token: loggedInCredentials.jwt_token
        }
     
        const validatorErrors = GamesValidator(updatedGame);
        const errorObjectKeysArray = Object.keys(validatorErrors);

        if(errorObjectKeysArray.length > 0){
            setInputError(validatorErrors);
            setHasAnyInputError(true);
        }else{
            try{
                await axios.put(`${GAMES_ENDPOINT}/${gameToBeUpdated.id}`, updatedGame);
                navigate('/fetchGames');
            }catch(e){
                console.log(e);
            }
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setFormData(data => ({ ...data, [e.target.name]: e.target.value }));
    }
 
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="gameDate">Game Date</label>
                <input type="text" 
                    id="gameDate" 
                    value={formData.game_date} 
                    defaultValue={gameToBeUpdated.game_date}
                    name="game_date"
                    onChange={handleChange} 
                    required
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                    {hasAnyInputError && inputError.game_date}
                </div>
            </div>

            <div>
                <label htmlFor="ground">Venue</label>
                <input type="text" 
                    id="ground" 
                    value={formData.venue} 
                    defaultValue={gameToBeUpdated.venue}
                    name="venue"
                    onChange={handleChange} 
                    required
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.venue }
                </div>
            </div>

            <div>
                <label htmlFor="opposition">Opposition Team</label>
                <input type="text" 
                    id="opposition" 
                    value={formData.opposition_team}
                    defaultValue={gameToBeUpdated.opposition_team}
                    name="opposition_team" 
                    onChange={handleChange} 
                    required
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.opposition_team}
                </div>
            </div>

            <div>
                <label htmlFor="gameTime">Time</label>
                <input type="text" 
                    id="gameTime" 
                    value={formData.game_time} 
                    defaultValue={gameToBeUpdated.game_time}
                    name="game_time" 
                    onChange={handleChange} 
                    required
                />
                   <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.game_time}
                </div>
            </div>

            {/* <button>Update</button> */}
            <button className={styles.UpdateGameButton}>Update</button>
        </form>
    );
}
export default UpdateGames;