import styles from '../../stylesheet/DisplayPlayers.module.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


const DisplayPlayers = ({ players, clicked }) => {
    const player = [];
    for(let val in players){
        player.push(players[val]);
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
        <div className={styles.PlayersInfo}>
            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
            >
            <Modal.Header>
                <Modal.Title>Players</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Playing Role</th>
                        <th>Start Date</th>
                    </tr>
                </thead>
                <tbody>
                    <td>{player.map(pl => <tr> {pl.first_name}</tr>)}</td> 
                    <td>{player.map(pl => <tr> {pl.last_name}</tr>)}</td> 
                    <td>{player.map(pl => <tr> {pl.playing_role}</tr>)}</td> 
                    <td>{player.map(pl => <tr> {pl.registered_date}</tr>)}</td>
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

export default DisplayPlayers;