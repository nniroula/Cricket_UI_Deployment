import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GamesValidator from '../../validators/GamesValidator';
// import { CREATE_GAMES_ENDPOINT } from '../Constant';
import { GAMES_ENDPOINT } from '../Constant';
import logInTracker from '../auth/loginTracker';
import styles from '../../stylesheet/Games.module.css';


const CreateGames = () => {
    const navigate = useNavigate();
    const [hasAnyInputError, setHasAnyInputError] = useState(false);
    const [inputError, setInputError] = useState({});
   
    const INITIAL_FORM_DATA = {
        game_date: '',
        venue: '',
        opposition_team: '',
        game_time: '',
        jwt_token:''
    };

    const [formData, setFormData] = useState({INITIAL_FORM_DATA});

    async function handleSubmit(evt){
        evt.preventDefault();
        const loggedInCredentials = logInTracker();

        const game = {
            game_date: formData.game_date,
            venue: formData.venue,
            opposition_team: formData.opposition_team,
            game_time: formData.game_time,
            jwt_token: loggedInCredentials.jwt_token
        }

        const validatorErrors = GamesValidator(game);
        const errorObjectKeysArray = Object.keys(validatorErrors);

        if(errorObjectKeysArray.length > 0){
            setInputError(validatorErrors);
            setHasAnyInputError(true);
        }else{
            try{
                await axios.post(GAMES_ENDPOINT, game);
                navigate('/');
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
                    placeholder="MM/DD/YYYY" 
                    value={formData.game_date} 
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
                    placeholder="Enter ground name" 
                    value={formData.venue} 
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
                    placeholder="Opposition team name" 
                    value={formData.opposition_team} 
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
                    placeholder="00:00" 
                    value={formData.game_time} 
                    name="game_time" 
                    onChange={handleChange} 
                    required
                />
                   <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.game_time}
                </div>
            </div>

            <button className={styles.CreateGameButton}>Submit</button>
        </form>
    );
}

export default CreateGames;