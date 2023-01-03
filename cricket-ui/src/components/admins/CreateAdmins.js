import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CurrentDate from '../../validators/DateValidator';
import { CREATE_ADMIN_ENDPOINT } from '../Constant';
import logInTracker from '../auth/loginTracker';
import AdminValidator from '../../validators/AdminValidator';
import styles from '../../stylesheet/Admins.module.css';


const CreateAdmin = () => {
    const navigate = useNavigate();
    const [hasAnyInputError, setHasAnyInputError] = useState(false);
    const [inputError, setInputError] = useState({});
    const today = CurrentDate();
    const TRUE = 'true';
    const loggedInAdmin = logInTracker();
   
    const INITIAL_FORM_DATA = {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        email: '',
        phone_number: '',
        is_admin: '',
        start_date: '',
    };

    const [formData, setFormData] = useState({INITIAL_FORM_DATA});

    async function handleSubmit(evt){
        evt.preventDefault();
 
        const user = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            username: formData.username,
            password: formData.password,
            email: formData.email,
            phone_number: formData.phone_number,
            is_admin: TRUE,
            start_date: today,
            jwt_token: loggedInAdmin.jwt_token
        };

        const validatorErrors = await AdminValidator(user);
        const errorObjectKeysArray = Object.keys(validatorErrors);

        if(errorObjectKeysArray.length > 0){
            setInputError(validatorErrors);
            setHasAnyInputError(true);
        }else{
            try{
                await axios.post(CREATE_ADMIN_ENDPOINT, user);
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
                <label htmlFor="username">Username</label>
                <input type="text" 
                    id="username" 
                    placeholder="Enter a username" 
                    value={formData.username} 
                    name="username" 
                    onChange={handleChange} 
                    required
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.username}
                </div>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" 
                    id="password" 
                    placeholder="Enter a password" 
                    value={formData.password} 
                    name="password" 
                    onChange={handleChange} 
                    required
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.password}
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
                <label htmlFor="start_date">Start Date</label>
                <input type="text" 
                    id="start_date" 
                    placeholder="mm/dd/yyyy"
                    value={today} 
                    name="start_date"
                    onChange={handleChange} 
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}></div>
            </div>

            <div>
                <label htmlFor="adminStatus">Admin</label>
                <input type="text" 
                    id="adminStatus" 
                    value={TRUE} 
                    name="is_admin"
                    onChange={handleChange}
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}></div>
            </div>
            <button className={styles.CreateAdminButton}>Submit</button>
        </form>
        </div>
    );
}

export default CreateAdmin;
