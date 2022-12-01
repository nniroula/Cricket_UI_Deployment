import styles from '../stylesheet/DisplayPlayers.module.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


const DisplayAdmins = ({ admins, clicked }) => {
    const adminUsers = [];
    for(let val in admins){
        adminUsers.push(admins[val]);
    }

    // useEffect(() => {

    // }, [players])
    const navigate = useNavigate(); 
    const [show, setShow] = useState(true);
    const handleShow = () => {
        setShow(!show);
        clicked = !clicked;
        navigate('/');
    }

    return(
        // <div className={styles.PlayersInfo}>
        <div>
            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
            >
            <Modal.Header>
                <Modal.Title>Admins</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                        {/* <th>Start Date</th> */}
                    </tr>
                </thead>
                <tbody>
                    <td>{adminUsers.map(admin => <tr> {admin.first_name}</tr>)}</td> 
                    <td>{adminUsers.map(admin => <tr> {admin.last_name}</tr>)}</td> 
                    <td>{adminUsers.map(admin => <tr> {admin.email}</tr>)}</td> 
                    <td>{adminUsers.map(admin => <tr> {admin.phone_number}</tr>)}</td>
                    {/* <td>{adminUsers.map(admin => <tr> {admin.start_date}</tr>)}</td> */}
                </tbody>
            </table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleShow}>Close</Button>
            </Modal.Footer>
            </Modal> 
        </div>
    );
}

export default DisplayAdmins;
