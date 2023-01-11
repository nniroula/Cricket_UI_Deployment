import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CurrentDate from '../../validators/DateValidator';
import { PLAYERS_URL } from '../Constant';
import LogInTracker from '../auth/LoginTracker';
import PlayerValidator from '../../validators/PlayerValidator';
import styles from '../../stylesheet/Players.module.css';


const CreatePlayers = () => {
    const navigate = useNavigate();
    const [hasAnyInputError, setHasAnyInputError] = useState(false);
    const [inputError, setInputError] = useState({});
    const today = CurrentDate();
    const loggedInAdmin = LogInTracker();
   
    const INITIAL_FORM_DATA = {
        first_name: '',
        last_name: '',
        email: '',
        birth_date: '',
        phone_number: '',
        emergency_contact: '',
        profile_picture_url: '',
        playing_role: '',
        registered_date: '',
    };

    const [formData, setFormData] = useState({INITIAL_FORM_DATA});

    async function handleSubmit(evt){
        evt.preventDefault();
 
        const player = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            birth_date: formData.birth_date,
            phone_number: formData.phone_number,
            emergency_contact: formData.emergency_contact,
            profile_picture_url: formData.profile_picture_url,
            playing_role: formData.playing_role,
            registered_date: today,
            jwt_token: loggedInAdmin.jwt_token
        };

        const validatorErrors = await PlayerValidator(player);
        const errorObjectKeysArray = Object.keys(validatorErrors);

        if(errorObjectKeysArray.length > 0){
            setInputError(validatorErrors);
            setHasAnyInputError(true);
        }else{
            try{
                await axios.post(PLAYERS_URL, player);
                navigate("/");
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
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstname">First Name</label>
                <input type="text" 
                    id="firstname" 
                    placeholder="Enter your first name" 
                    value={formData.first_name} 
                    name="first_name"
                    onChange={handleChange} 
                    required
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                    {hasAnyInputError && inputError.first_name}
                </div>
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" 
                    id="lastName" 
                    placeholder="Enter your last name" 
                    value={formData.last_name} 
                    name="last_name"
                    onChange={handleChange} 
                    required
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.last_name }
                </div>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" 
                    id="email" 
                    placeholder="Enter your email" 
                    value={formData.email} 
                    name="email" 
                    onChange={handleChange} 
                    required
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                    {inputError.email}
                </div>
            </div>

            <div>
                <label htmlFor="birthDate">Birth Date</label>
                <input type="text" 
                    id="birthDate" 
                    placeholder="Enter your birth date" 
                    value={formData.birth_date} 
                    name="birth_date" 
                    onChange={handleChange} 
                    required
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.birth_date}
                </div>
            </div>

            <div>
                <label htmlFor="phone_number">Phone</label>
                <input type="text" 
                    id="phone_number" 
                    placeholder="Enter your phone number" 
                    value={formData.phone_number} 
                    name="phone_number" 
                    onChange={handleChange} 
                    required
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.phone_number}
                </div>
            </div>

            <div>
                <label htmlFor="emergency">Emergency Contact</label>
                <input type="text" 
                    id="emergency" 
                    placeholder="Enter your emergency contact person" 
                    value={formData.emergency_contact} 
                    name="emergency_contact" 
                    onChange={handleChange} 
                    required
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.emergency_contact}
                </div>
            </div>

            <div>
                <label htmlFor="profile">Profile Picture</label>
                <input type="text" 
                    id="profile" 
                    value={formData.profile_picture_url} 
                    name="profile_picture_url"
                    onChange={handleChange}
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.profile_picture_url}
                </div>
            </div>

            <div>
                <label htmlFor="role">Playing Role</label>
                <input type="text" 
                    id="role" 
                    value={formData.playing_role} 
                    name="playing_role"
                    onChange={handleChange}
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.playing_role}
                </div>
            </div>

            <div>
                <label htmlFor="start_date">Registered Date</label>
                <input type="text" 
                    id="start_date" 
                    placeholder="mm/dd/yyyy"
                    value={today} 
                    name="registered_date"
                    onChange={handleChange} 
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.registered_date}
                </div>
            </div>
            <button className={styles.CreatePlayerButton}>Submit</button>
        </form>
        </div>
    );
}

export default CreatePlayers;