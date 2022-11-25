import styles from '../stylesheet/GeneralStyle.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    const handleShow = () => {
        setShow(!show);
        navigate('/');
    }
    return (
        <div>
            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                <Modal.Title>Use following information to contact us!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.AboutUsDiv}>
                        <p className={styles.AboutUs}>
                            You can email us at cricketaecc@gmail.com
                        </p>
                        <p>
                            If want to directly talk to us, call us on the follwing number during the weekend, 8am - 5pm MST. 
                            We are not available to pick up calls during the weekdays.
                        
                        </p>
                        <p> Phone: 720-499-3220 </p>
                        <p>You can also reach out us via Facebook Messanger. You can access it via the AECC Facebook Page.</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ContactUs;