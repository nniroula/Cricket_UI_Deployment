import React from 'react';
import { useNavigate } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import LoginForm from './LoginForm';

const Logout = () => {
    // const navigate = useNavigate();
    // const userInLocalStorage = localStorage.getItem('user');
    const userInLocalStorage = localStorage.getItem('loggedInUser');
    // localStorage.removeItem('user');
    localStorage.removeItem(userInLocalStorage );
    // navigate back to login pag'e
    toast.success('Logged out successfully!');
   
    localStorage.clear();
    // navigate('/login');

    return (
        <LoginForm />
    )
}
export default Logout;

/*
const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
  };
  */