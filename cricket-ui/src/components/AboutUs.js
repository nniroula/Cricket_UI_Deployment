import styles from '../stylesheet/GeneralStyle.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
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
                <Modal.Title>Aurora Everest Cricket Club (AECC)</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className={styles.AboutUsDiv}>
                    <p className={styles.AboutUs}>
                        The Aurora Everest Cricket Club (AECC) was founded in July 2020 with the slogan of "Play Cricket Stay Healthy".
                        It was the time of the big wave of the COVID19 pandemic that nation was under lock down and that people were not 
                        comfortable going out in public. Some youths in the City of Aurora in the state of Colorado decided then to play 
                        cricket and stay strong. Three - four youths started practicing it. The number grew and now, it is a structered club with good number of members.
                    </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AboutUs;