import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import BCRYPT_WORK_FACTOR from './Constant';
import axios from 'axios';
import UserValidator from '../validators/UserValidator';
import CurrentDate from '../validators/DateValidator';


const SignUpForm = () => {
    const navigate = useNavigate();
    const BCRYPT_FACTOR = BCRYPT_WORK_FACTOR();
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
            start_date: today // without today, it gives error
        };

        const validatorErrors = UserValidator(user);
        const errorObjectKeysArray = Object.keys(validatorErrors);

        if(errorObjectKeysArray.length > 0){
            setInputError(validatorErrors);
            setHasAnyInputError(true);
        }else{
            try{
                await axios.post('http://localhost:3000/users', user);
                // navigate('/signupFormData'); // login page
                navigate('/login'); // login page
            }catch(e){
                console.log(e);
            }
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setFormData(data => ({ ...data, [e.target.name]: e.target.value })); //es2015 computed Property names
    }
 
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstname">First Name</label>
                <input type="text" 
                    id="firstname" 
                    placeholder="your first name" 
                    value={formData.first_name} 
                    name="first_name" // name attribute should be same as the state variable
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
                    placeholder="your last name" 
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
                    placeholder="your name" 
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
                    placeholder="enter a password" 
                    value={formData.password} 
                    name="password" 
                    onChange={handleChange} 
                    required
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}></div>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" 
                    id="email" 
                    placeholder="your email" 
                    value={formData.email} 
                    name="email" 
                    onChange={handleChange} 
                    required
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}></div>
            </div>

            <div>
                <label htmlFor="phone_number">Phone</label>
                <input type="text" 
                    id="phone_number" 
                    placeholder="your phone number" 
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

            <button>Sign Up</button>
        </form>
    );
}

export default SignUpForm;