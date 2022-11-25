// import React from 'react';




import styles from '../stylesheet/GeneralStyle.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SignUpForm from './SignUpForm';


const TrialComponent = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <h1>Hellow Trial Component</h1>
            <SignUpForm />
            {/* <form> */}
                {/* <input type="text" placeholder="fname" /> */}

                {/* <button onClick={handleShow}>Sign Up</button> */}

            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
                {/* you make create a free account small font */}
                <Modal.Title>Create a free account</Modal.Title> 
            </Modal.Header>
            <Modal.Body>
            <div className={styles.AboutUsDiv}>
                <SignUpForm />
                {/* <input type="text" placeholder="fname" /> */}
            </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
            </Modal>
        {/* </form> */}
        </>
    )
}

export default TrialComponent;