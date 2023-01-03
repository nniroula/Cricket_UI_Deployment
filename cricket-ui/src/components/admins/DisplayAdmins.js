import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import logInTracker from '../auth/loginTracker';
import CreateAdmin from './CreateAdmins';
import { CREATE_ADMIN_ENDPOINT } from '../Constant';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import UpdateAdmins from './UpdateAdmins';
import styles from '../../stylesheet/Admins.module.css';
import {toast, ToastContainer} from 'react-toastify';      
import 'react-toastify/dist/ReactToastify.css'; 


const DisplayAdmins = ({ admins, clicked }) => {
    const adminUsers = [];
    const [adminCreated, setAdminCreated] = useState(false);
    const [adminUpdated, setAdminUpdated] = useState(false);
    const [adminToBeUpdated, setAdminToBeUpdate] = useState({});
    const signedInUser = logInTracker();
    let isSignedIn = false;

    if(signedInUser != undefined){
        isSignedIn = signedInUser.is_admin;
    }else{
        isSignedIn = false;
    }
    
    for(let admin in admins){
        adminUsers.push(admins[admin]);
    }

    const navigate = useNavigate(); 
    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(!show);
        clicked = !clicked;
        navigate('/');    
    }

    const addAdmin = () => {
        setAdminCreated(!adminCreated);
    }

    const hanldeDelete = async (admin) => {
        const { id } = admin;
        const delete_url = `${CREATE_ADMIN_ENDPOINT}/${id}`;
        const  jwt_token = signedInUser.jwt_token;

        if(signedInUser != undefined && signedInUser.is_admin === true){
            try{
                await axios.delete(
                    delete_url,
                    {data: {
                        'jwt_token': jwt_token
                        },
                    }
                );
                navigate('/');
            }catch(e){
                console.log(e);
            }
        }
        toast.error("You cannot delete yourself!");
    }

    const hanldeUpdate = (admin) => {
        if(admin.username === signedInUser.username){
            setAdminUpdated(!adminUpdated);
            setAdminToBeUpdate(admin);
        }
    }

    return(
        <>
            { isSignedIn ? 
                <div>
                    <Modal
                        show={show}
                        backdrop="static"
                        keyboard={false}
                    >
                    <Modal.Header>
                        <Modal.Title className={styles.ModalTitle}>Admins</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {adminUpdated && <UpdateAdmins adminToBeUpdated={adminToBeUpdated} />}
                        {adminCreated && <CreateAdmin />}
                        <button onClick={addAdmin}>New Admin</button>
                        <table>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email Address</th>
                                    <th>Phone Number</th>
                                    <th>Start Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>{adminUsers.map(admin => <tr> {admin.first_name}</tr>)}</td> 
                                <td>{adminUsers.map(admin => <tr> {admin.last_name}</tr>)}</td> 
                                <td>{adminUsers.map(admin => <tr> {admin.email}</tr>)}</td> 
                                <td>{adminUsers.map(admin => <tr> {admin.phone_number}</tr>)}</td>
                                <td>{adminUsers.map(admin => <tr> {admin.start_date}</tr>)}</td>      
                                <td className={styles.createAdminTD}> {adminUsers.map((admin) => 
                                        <tr className={styles.TDButtons}>
                                            <div className={styles.IconDiv}>
                                            <button className={styles.UpDelButtons} onClick={() => hanldeDelete(admin)}> <DeleteIcon /> </button>
                                            <button className={styles.UpDelButtons} onClick={() => hanldeUpdate(admin)}> <EditIcon /> </button>
                                            </div>
                                        </tr>
                                    )}
                                </td> 
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleShow}>Close</Button>
                    </Modal.Footer>
                    </Modal> 
                </div>
                :
                <div>
                    <Modal show={show} backdrop="static" keyboard={false}>
                    <Modal.Header>
                        <Modal.Title className={styles.ModalTitle}>Admins</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Address</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>{adminUsers.map(admin => <tr> {admin.first_name}</tr>)}</td> 
                            <td>{adminUsers.map(admin => <tr> {admin.last_name}</tr>)}</td> 
                            <td>{adminUsers.map(admin => <tr> {admin.email}</tr>)}</td> 
                            <td>{adminUsers.map(admin => <tr> {admin.phone_number}</tr>)}</td>
                        </tbody>
                    </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleShow}>Close</Button>
                    </Modal.Footer>
                    </Modal> 
                </div>
            }
            <ToastContainer />
        </>
    );
}

export default DisplayAdmins;