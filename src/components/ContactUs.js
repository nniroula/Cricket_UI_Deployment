import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import styles from '../stylesheet/ContactUs.module.css';

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
                <Modal.Header className={styles.ContactUsContainer}>
                <Modal.Title className={styles.ModalTitle}>Contact AECC!</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.ContactUsContainer}>
                    <div className={styles.AboutUsDiv}>
                        <p>Send us email at: &nbsp;&nbsp;    
                            <span className={styles.AboutUsEmail}>
                            cricketaecc@gmail.com
                            </span>
                        </p>
                        <p>
                            Call us during weekend, 8am - 5pm MST at:&nbsp;&nbsp;  
                            <span className={styles.AboutUsPhone}> 720-499-3220 </span>
                        </p>
                     
                        <p>Connect with us via social media at:&nbsp;&nbsp;
                        <span className={styles.AboutUsSocialMedia}>Facebook Messanger. You can access it via the AECC Facebook Page.</span>
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer className={styles.ContactUsContainer}>
                    <Button variant="secondary" onClick={handleShow}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ContactUs;