// import React from 'react';
import SignUpForm from './SignUpForm';

// const SignUpFormInModal = () => {
//     return (
//         <SignUpForm />
//     )
// }

// export default SignUpFormInModal;


import styles from '../stylesheet/GeneralStyle.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SignUpFormInModal  = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>Sign Up</Button> */}
        <button onClick={handleShow}>Sign Up</button>

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
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUpFormInModal;
