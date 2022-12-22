import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


const LoginForm = () => {
    const navigate = useNavigate();

    const [trackLoggedInuser, setTrackLoggedInUser] = useState('');

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
    const [selectValue, setSelectValue] = useState();

    const handleChange = (e) => {
        e.preventDefault();
        setSelectValue(e.target.value);
        setFormData(data => ({ ...data, [e.target.name]: e.target.value })); //es2015 computed Property names
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
            const adminsFromDB = await axios.get('http://localhost:3000/users/admins');
            for(let admin of adminsFromDB.data){
                arrayOfAdminUsernames.push(admin.username);
            }

            if(user.is_admin === 'false'){
                if(arrayOfAdminUsernames.includes(user.username)){
                    toast.error('Log in failed! Check user type.');
                }else{
                    const response = await axios.post('http://localhost:3000/user/login', user);
                    toast.success('Successfully Logged in!')
                    // console.log(response.data.jwt_token) // returns jwt_token, save it to variable
                    if(response.data.jwt_toke){
                        // localStorage.setItem('user', JSON.stringify(response.data));
                        //   / set the state of the user
                            // setUser(response.data)
                        // setTrackLoggedInUser(response.data.jwt_toke);
                        setTrackLoggedInUser(response.data);
                            // / store the user in localStorage
                            // localStorage.setItem('user', response.data)
                        localStorage.setItem('loggedInUser', response.data);
                    }
                }
            }else if(user.is_admin === 'true'){
                if(arrayOfAdminUsernames.includes(user.username)){
                    const response = await axios.post('http://localhost:3000/user/login', user);
                    toast.success('Successfully Logged in!');
                    // console.log(response.data.jwt_token) // returns jwt_token, save it to variable
                    // console.log(response.data);
                    // navigate to admin access page
                    // console.log('Navigate to admin dashboard');
                    if(response.data.jwt_token){
                        // localStorage.setItem('loggedInUser', response.data.jwt_token);
                        // localStorage.setItem('loggedInUser', response.data);
                        localStorage.setItem('loggedInUser', JSON.stringify(response.data));
                        // localStorage.setItem('loggedInUser', JSON.stringify(response.data.jwt_token, response.data.is_admin));
                        // localStorage.setItem('loggedInUser', {is_admin: response.data.is_admin, jwt_token: response.data.jwt_token});
                        setTrackLoggedInUser(response.data);
                        // console.log(trackLoggedInuser);
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
        // console.log(signedInUser);
        // console.log(signedInUser.username);
        // console.log(signedInUser.is_admin);
        if (signedInUser) {
        //   const foundUser = JSON.parse(loggedInUser);
        //   setTrackLoggedInUser(foundUser);
            // setTrackLoggedInUser(signedInUser);
            setTrackLoggedInUser(JSON.parse(signedInUser));
        }
      }, []);

    //   
    //   const signedInUser = localStorage.getItem('loggedInUser');
    //   console.log(signedInUser.is_admin);
    // console.log(trackLoggedInuser.is_admin);

    return (
        <>
            {trackLoggedInuser ? <div>You are already logged in. </div> :
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" 
                            id="username" 
                            placeholder="Your name" 
                            value={formData.username} 
                            name="username" 
                            onChange={handleChange} 
                            required
                        />
                        <div style={{ color: 'red', marginBottom : '0.7em'}}>
        
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
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

                    <div>
                        <label htmlFor="userType">User type</label>
                        <select name="is_admin" onChange={handleChange} >
                            {options.map((option) =>(
                            <option value={option.value} name={option.category} onChange={() => setSelectValue(option.name)}>{option.category} </option>
                        ))}
                        </select>
                        
                        <div style={{ color: 'red', marginBottom : '0.7em'}}></div>
                    </div>

                    <div className="select-container">
                </div>

                <button>Log In</button>
                <ToastContainer />
            </form>
        }
    </>
    )
}

export default LoginForm;

/*

import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()

  const handleSubmit = async e => {
    
  };

/ if there's a user show the message below
  if (user) {
    return <div>{user.name} is loggged in</div>;
  }

  / if there's no user, show the login form
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        placeholder="enter a username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default App;


const handleSubmit = async e => {
  e.preventDefault();
  const user = { username, password };
  / send the username and password to the server
  const response = await axios.post(
    "http://blogservice.herokuapp.com/api/login",
    user
  );
  / set the state of the user
  setUser(response.data)
  / store the user in localStorage
  localStorage.setItem('user', response.data)
  console.log(response.data)
};

 useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

*/