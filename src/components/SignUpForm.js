import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import {BCRYPT_WORK_FACTOR} from './Constant';
import axios from 'axios';
import UserValidator from '../validators/UserValidator';
import CurrentDate from '../validators/DateValidator';
import { SIGN_UP_ENDPOINT } from './Constant';
import styles from './../stylesheet/Login.module.css';
import classNames from 'classnames';


const SignUpForm = () => {
    const navigate = useNavigate();
    const BCRYPT_FACTOR = BCRYPT_WORK_FACTOR;
    const [hasAnyInputError, setHasAnyInputError] = useState(false);
    const [inputError, setInputError] = useState({});
    const today = CurrentDate(); 
   
    const INITIAL_FORM_DATA = {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        email: '',
        phone_number: '',
        is_admin: '',
        start_date: ''
    };

    const [formData, setFormData] = useState({INITIAL_FORM_DATA});

    async function handleSubmit(evt){
        evt.preventDefault();

        const hashedPassword = bcrypt.hashSync(formData.password, BCRYPT_FACTOR);

        const user = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            username: formData.username,
            password: hashedPassword,
            email: formData.email,
            phone_number: formData.phone_number,
            is_admin: 'false',
            start_date: today
        };

        const validatorErrors = UserValidator(user);
        const errorObjectKeysArray = Object.keys(validatorErrors);

        if(errorObjectKeysArray.length > 0){
            setInputError(validatorErrors);
            setHasAnyInputError(true);
        }else{
            try{
                await axios.post(SIGN_UP_ENDPOINT , user);
                navigate('/login');
            }catch(e){
                console.log(e.response.data.message);
            }
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setFormData(data => ({ ...data, [e.target.name]: e.target.value }));
    }

    const handleCancel = () => {
        navigate('/');
    }
 
    return (
        <>
        <div className={styles.LoginForm}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstname" className={classNames(styles.Labels, styles.SignUpFirstName)}>First Name</label>
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
                    <label htmlFor="lastName" className={styles.Labels}>Last Name</label>
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
                    <label htmlFor="username" className={styles.Labels}>Username</label>
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
                    <label htmlFor="password" className={styles.Labels}>Password</label>
                    <input type="password" 
                        id="password" 
                        placeholder="Enter a password" 
                        value={formData.password} 
                        name="password" 
                        onChange={handleChange} 
                        required
                    />
                    <div style={{ color: 'red', marginBottom : '0.7em'}}></div>
                </div>

                <div>
                    <label htmlFor="email"  className={classNames(styles.Labels, styles.UserEmail)}>Email</label>
                    <input type="email" 
                        id="email" 
                        placeholder="Enter your email" 
                        value={formData.email} 
                        name="email" 
                        onChange={handleChange} 
                        required
                    />
                    <div style={{ color: 'red', marginBottom : '0.7em'}}></div>
                </div>

                <div>
                    <label htmlFor="phone_number"  className={classNames(styles.Labels, styles.UserPhone)}>Phone</label>
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
                    <label htmlFor="start_date" className={styles.Labels}>Start Date</label>
                    <input type="text" 
                        id="start_date" 
                        placeholder="mm/dd/yyyy"
                        value={today} 
                        name="start_date"
                        onChange={handleChange} 
                    />
                    <div style={{ color: 'red', marginBottom : '0.7em'}}></div>
                </div>
                <button className={styles.LoginButton}>Sign Up</button>
            </form>
            <button onClick={handleCancel} className={styles.CancelButtons}>Cancel</button>
        </div>
        </>
    );
}

export default SignUpForm;