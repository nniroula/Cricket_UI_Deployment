import styles from '../stylesheet/GeneralStyle.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ContactUs = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>Contact US</Button> */}
      <button onClick={handleShow}>Contact Us</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
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
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactUs;