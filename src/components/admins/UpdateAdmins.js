import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminUpdateValidator from '../../validators/AdminUpdateValidator';
import { CREATE_ADMIN_ENDPOINT } from '../Constant';
import LogInTracker from '../auth/LoginTracker';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import styles from '../../stylesheet/Admins.module.css';


const UpdateAdmins = ({adminToBeUpdated}) => {
    const navigate = useNavigate();
    const [hasAnyInputError, setHasAnyInputError] = useState(false);
    const [inputError, setInputError] = useState({});
    const TRUE = 'true';
   
    const EXISTING_FORM_DATA  = {
        first_name: adminToBeUpdated.first_name,
        last_name: adminToBeUpdated.last_name,
        username: adminToBeUpdated.username,
        password: adminToBeUpdated.password,
        email: adminToBeUpdated.email,
        phone_number: adminToBeUpdated.phone_number,
        is_admin: adminToBeUpdated.is_admin,
        start_date: adminToBeUpdated.start_date
    };

    const [formData, setFormData] = useState({EXISTING_FORM_DATA});
  
    async function handleSubmit(evt){
        evt.preventDefault();
        const loggedInCredentials = LogInTracker();
        let newFirstName = '';
        let newLastName = '';
        let newUserName = '';
        let newPassword = '';
        let newEmail = '';
        let newPhoneNumber = '';
        let newStartDate = '';
        let newAdminStatus = '';
     
        if(formData.first_name !== undefined){
            newFirstName = formData.first_name;
        }else{
            newFirstName = adminToBeUpdated.first_name;
        }
        if(formData.last_name !== undefined){
            newLastName = formData.last_name;
        }else{
            newLastName = adminToBeUpdated.last_name;
        }

        if(formData.username !== undefined){
            newUserName= formData.username;
        }else{
            newUserName = adminToBeUpdated.username;
        }

        if(formData.password !== undefined){
            newPassword= formData.password;
        }else{
            newPassword = adminToBeUpdated.password;
        }

        if(formData.email !== undefined){
            newEmail= formData.email;
        }else{
            newEmail = adminToBeUpdated.email;
        }

        if(formData.phone_number !== undefined){
            newPhoneNumber = formData.phone_number;
        }else{
            newPhoneNumber = adminToBeUpdated.phone_number;
        }

        if(formData.start_date !== undefined){
            newStartDate = formData.start_date;
        }else{
            newStartDate = adminToBeUpdated.start_date;
        }

        if(formData.is_admin !== undefined && formData.is_admin === 'true'){
            newAdminStatus = formData.is_admin;
        }else{
            newAdminStatus = adminToBeUpdated.is_admin;
        }

        const updatedAdmin = {
            first_name: newFirstName,
            last_name: newLastName,
            username: newUserName,
            password: newPassword,
            email: newEmail,
            phone_number: newPhoneNumber,
            start_date: newStartDate,
            jwt_token: loggedInCredentials.jwt_token,
            is_admin: newAdminStatus.toString()
        }
     
        const validatorErrors = await AdminUpdateValidator(updatedAdmin);
        const errorObjectKeysArray = Object.keys(validatorErrors);

        if(errorObjectKeysArray.length > 0){
            setInputError(validatorErrors);
            setHasAnyInputError(true);
        }else{
            try{
                await axios.put(`${CREATE_ADMIN_ENDPOINT}/${adminToBeUpdated.id}`, updatedAdmin);
                navigate('/');
            }catch(e){
                toast.error("Oops something wrong. Refresh and try again!");
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
                    defaultValue={adminToBeUpdated.first_name}
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
                    defaultValue={adminToBeUpdated.last_name}
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
                    value={formData.username} 
                    defaultValue={adminToBeUpdated.username}
                    name="username" 
                    onChange={handleChange} 
                    required
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.username}
                </div>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" 
                    id="email" 
                    value={formData.email} 
                    defaultValue={adminToBeUpdated.email}
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
                    value={formData.phone_number} 
                    defaultValue={adminToBeUpdated.phone_number}
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
                    value={formData.start_date} 
                    defaultValue={adminToBeUpdated.start_date}
                    name="start_date"
                    onChange={handleChange} 
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}></div>
            </div>

            <div>
                <label htmlFor="adminStatus">Admin</label>
                <input type="text" 
                    id="adminStatus" 
                    placeholder="Yes or No"
                    value={TRUE} 
                    name="is_admin"
                    onChange={handleChange}
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}></div>
            </div>

            <div>
                <div><small style={{color: 'blue'}}>Enter your password to update credentials.</small></div>
                <label htmlFor="password">Password</label>
                <input type="password" 
                    id="password" 
                    value={formData.password} 
                    defaultValue={adminToBeUpdated.password}
                    name="password" 
                    onChange={handleChange} 
                    required
                />
                <div style={{ color: 'red', marginBottom : '0.7em'}}>
                     {inputError.password}
                </div>
            </div>

            <button className={styles.UpdateButton}>Update</button>
        </form>
        </div>
        <ToastContainer />
        </>
    );
}
export default UpdateAdmins;

