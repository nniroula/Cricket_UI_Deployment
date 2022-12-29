import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminUpdateValidator from '../../validators/AdminUpdateValidator';
import { CREATE_ADMIN_ENDPOINT } from '../Constant';
import logInTracker from '../auth/loginTracker';
import styles from '../../stylesheet/Games.module.css';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import CurrentDate from '../../validators/DateValidator';


// const UpdateGames = ({adminToBeUpdated}) => {
const UpdatePlayers = ({playerToBeUpdated}) => {
    const navigate = useNavigate();
    const [hasAnyInputError, setHasAnyInputError] = useState(false);
    const [inputError, setInputError] = useState({});

    const loggedInAdmin = logInTracker();
    const today = CurrentDate();  
   
    const EXISTING_FORM_DATA  = {
        first_name: playerToBeUpdated.first_name,
        last_name: playerToBeUpdated.last_name,
        email: playerToBeUpdated.email,
        birth_date: playerToBeUpdated.birth_date,
        phone_number: playerToBeUpdated.phone_number,
        emergency_contact: playerToBeUpdated.emergency_contact,
        profile_picture_url: playerToBeUpdated.profile_picture_url,
        playing_role: playerToBeUpdated.playing_role,
        registered_date: today,
        jwt_token: loggedInAdmin.jwt_token
    };

    const [formData, setFormData] = useState({EXISTING_FORM_DATA});
  
    async function handleSubmit(evt){
        evt.preventDefault();
   
        let newFirstName = '';
        let newLastName = '';
        let newEmail = '';
        let newPhoneNumber = '';
        let newEmergencyContact = '';
        let newProfilePictureURL = '';
        let newPlayingRole = '';
        let newRegisteredDate = '';
        let newBirthDate = '';
     
        if(formData.first_name !== undefined){
            newFirstName = formData.first_name;
        }else{
            newFirstName = playerToBeUpdated.first_name;
        }
        if(formData.last_name !== undefined){
            newLastName = formData.last_name;
        }else{
            newLastName = playerToBeUpdated.last_name;
        }

        if(formData.email !== undefined){
            newEmail= formData.email;
        }else{
            newEmail = playerToBeUpdated.email;
        }

        if(formData.phone_number !== undefined){
            newPhoneNumber = formData.phone_number;
        }else{
            newPhoneNumber = playerToBeUpdated.phone_number;
        }
        // start date
        if(formData.registered_date !== undefined){
            newRegisteredDate = formData.registered_date;
        }else{
            newRegisteredDate = playerToBeUpdated.registered_date;
        }

        if(formData.emergency_contact !== undefined){
            newEmergencyContact = formData.emergency_contact;
        }else{
            newEmergencyContact = playerToBeUpdated.emergency_contact;
        }

        if(formData.profile_picture_url !== undefined){
            newProfilePictureURL = formData.profile_picture_url;
        }else{
            newProfilePictureURL = playerToBeUpdated.profile_picture_url;
        }

        if(formData.playing_role !== undefined){
            newPlayingRole = formData.playing_role;
        }else{
            newPlayingRole = playerToBeUpdated.playing_role;
        }

        if(formData.birth_date !== undefined){
            newBirthDate = formData.birth_date;
        }else{
            newBirthDate = playerToBeUpdated.birth_date;
        }

        const updatedAdmin = {
            first_name: newFirstName,
            last_name: newLastName,
            email: newEmail,
            birth_date: newBirthDate,
            phone_number: newPhoneNumber,
            emergency_contact: newEmergencyContact,
            profile_picture_url: newProfilePictureURL,
            playing_role: newPlayingRole,
            registered_date: today,
            jwt_token: loggedInAdmin.jwt_token
        }
     
        const validatorErrors = await AdminUpdateValidator(updatedAdmin);
        const errorObjectKeysArray = Object.keys(validatorErrors);
       
        // console.log("error check in admin validator line 109");
        // console.log(validatorErrors);

        if(errorObjectKeysArray.length > 0){
            setInputError(validatorErrors);
            setHasAnyInputError(true);
        }else{
            try{
                await axios.put(`${CREATE_ADMIN_ENDPOINT}/${playerToBeUpdated.id}`, updatedAdmin);
                navigate('/fetchAdmins');
            }catch(e){
                console.log("OOPS something wrong. Check Password!");
                toast.error("Oops something wrong. Check Password!");
                console.log(e);
            }
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setFormData(data => ({ ...data, [e.target.name]: e.target.value }));
    }
 
    return (
        <>
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstname">First Name</label>
                <input type="text" 
                    id="firstname" 
                    value={formData.first_name} 
                    defaultValue={playerToBeUpdated.first_name}
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
                    value={formData.last_name} 
                    defaultValue={playerToBeUpdated.last_name}
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
                    value={formData.email} 
                    defaultValue={playerToBeUpdated.email}
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
                <input type="birthDate" 
                    id="birth_date" 
                    value={formData.birth_date} 
                    defaultValue={playerToBeUpdated.birth_date}
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
                    value={formData.phone_number} 
                    defaultValue={playerToBeUpdated.phone_number}
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
                    value={formData.emergency_contact} 
                    defaultValue={playerToBeUpdated.emergency_contact}
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
                    defaultValue={playerToBeUpdated.profile_picture_url}
                    name="profile_picture_url" 
                    onChange={handleChange} 
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.emergency_contact}
                </div>
            </div>

            <div>
                <label htmlFor="playingRole">Playing Role</label>
                <input type="text" 
                    id="playingRole" 
                    value={formData.playing_role} 
                    defaultValue={playerToBeUpdated.playing_role}
                    name="playing_role" 
                    onChange={handleChange} 
                    required
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.playing_role}
                </div>
            </div>
 
            <div>
                <label htmlFor="start_date">Start Date</label>
                <input type="text" 
                    id="start_date" 
                    value={formData.registered_date} 
                    defaultValue={playerToBeUpdated.registered_date}
                    name="registered_date"
                    onChange={handleChange} 
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}></div>
            </div>

            <button className={styles.CreateAdminButton}>Submit</button>
        </form>
        </div>
        <ToastContainer />
        </>
    );
}
export default UpdatePlayers;

