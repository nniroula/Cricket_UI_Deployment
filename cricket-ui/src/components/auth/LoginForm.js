import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';   
import Home from '../Home';
import { RETRIEVE_ADMINS_URL, LOGIN_ENDPOINT } from '../Constant';
import styles from '../../stylesheet/Login.module.css';
import classNames from 'classnames'


const LoginForm = () => {
    const [trackLoggedInuser, setTrackLoggedInUser] = useState();
    const options = [
        {
            category: "Select One",
            value: false,
          },
        {
            category: "Admin",
            value: true,
        },
        {
            category: "Non-Admin",
            value: false,
        },
      ];
  
    const INITIAL_FORM_DATA = {
        username: '',
        password: '',
        is_admin: ''
    };

    const [formData, setFormData] = useState({INITIAL_FORM_DATA});
    const [selectValue, setSelectValue] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setSelectValue(e.target.value);
        setFormData(data => ({ ...data, [e.target.name]: e.target.value }));
    }

    const user = {
        username: formData.username,
        password: formData.password,
        is_admin: selectValue
    };

    async function handleSubmit(evt){
        evt.preventDefault();
        const arrayOfAdminUsernames = [];

        try{
            const adminsFromDB = await axios.get(RETRIEVE_ADMINS_URL);

            for(let admin of adminsFromDB.data){
                arrayOfAdminUsernames.push(admin.username);
            }

            if(user.is_admin === 'false'){
                if(arrayOfAdminUsernames.includes(user.username)){
                    toast.error('Log in failed! Check user type.');
                }else{
                    const response = await axios.post(LOGIN_ENDPOINT, user);
                    toast.success('Successfully Logged in!');
                    if(response.data.jwt_toke){
                        setTrackLoggedInUser(response.data);
                        localStorage.setItem('loggedInUser', response.data);
                    }
                }
            }else if(user.is_admin === 'true'){
                if(arrayOfAdminUsernames.includes(user.username)){
                    const response = await axios.post(LOGIN_ENDPOINT, user);
              
                    if(response.data.jwt_token){
                        localStorage.setItem('loggedInUser', JSON.stringify(response.data));
                        setTrackLoggedInUser(response.data);
                    }
                }else{
                    toast.error('Admin Log in failed! Check user type.');
                }
            }
        }catch(e){
            toast.error('Oops! Something went wrong. Try again.');
        }
    }

    useEffect(() => {
        const signedInUser = localStorage.getItem('loggedInUser');
        if (signedInUser) {
            setTrackLoggedInUser(JSON.parse(signedInUser));
        }
      }, []);

    return (
        <>
            {trackLoggedInuser ? <Home /> :
            <div className={styles.LoginForm}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.LoginFormContent}>
                        <label htmlFor="username" className={classNames(styles.Labels, styles.UsernameLabel)}>Username</label>
                        <input type="text" 
                            id="username" 
                            placeholder="Your username" 
                            value={formData.username} 
                            name="username" 
                            onChange={handleChange} 
                            required
                        />
                        <div style={{ color: 'red', marginBottom : '0.7em'}}> </div>
                    </div>

                    <div className={styles.LoginFormContent}>
                        <label htmlFor="password" className={styles.Labels}>Password</label>
                        <input type="password" 
                            id="password" 
                            placeholder="Enter your password" 
                            value={formData.password} 
                            name="password" 
                            onChange={handleChange} 
                            required
                        />
                        <div style={{ color: 'red', marginBottom : '0.7em'}}></div>
                    </div>

                    <div className={styles.LoginFormContent}>
                        <label htmlFor="userType" className={styles.Labels}>User type</label>
                        <select name="is_admin" onChange={handleChange} >
                            {options.map((option) =>(
                                <option value={option.value} name={option.category} 
                                onChange={() => setSelectValue(option.name)}>{option.category} 
                            </option>
                        ))}
                        </select>
                        
                        <div style={{ color: 'red', marginBottom : '0.7em'}}></div>
                    </div>

                <button className={styles.LoginButton}>Log In</button>
            </form>
            </div> 
        }
        <ToastContainer />
    </>
    )
}

export default LoginForm;