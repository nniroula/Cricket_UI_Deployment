import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import styles from '../stylesheet/AboutUs.module.css';

const AboutUs = () => {
    const navigate = useNavigate(); 
    const [show, setShow] = useState(true);
    const handleShow = () => {
        setShow(!show);
        navigate('/');
    }
    return (
        <div>
            <Modal show={show} backdrop="static" keyboard={false}>
                <Modal.Header className={styles.AboutUsModal}>
                <Modal.Title className={styles.ModalTitle}> 
                    <div style={{textAlign:'center'}}>
                        <img src={require('../images/AECC_LOGO.png')} alt="Jersey logo" style={{height:"5.5em", width:"5em"}}/>
                    </div>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.AboutUsModal}>
                <div className={styles.AboutUsDiv}>
                    <p className={styles.AboutUsContent}>
                        The Aurora Everest Cricket Club (AECC) was founded in July 2020 with the slogan of "Play Cricket, Stay Healthy".
                        <img className={styles.GroupImage} src={require('../images/aecc_group_photo.jpeg')} alt="players group photo"/> 
                        It was the time of the big wave of the COVID19 pandemic that nation was under lock down and that people were not 
                        comfortable going out in public. Some youths from the city of Aurora in the state of Colorado decided then to play 
                        cricket and stay strong. Three-four youths started practicing it. The number grew up rapidly and now, it is a structered club with good number of members.
                    </p>
                </div>
                </Modal.Body>
                <Modal.Footer className={styles.AboutUsModal}>
                    <Button variant="secondary" onClick={handleShow}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AboutUs;