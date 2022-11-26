import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


const DisplayGames = ({ games, clicked }) => {
    const game = [];
    for(let val in games){
        game.push(games[val]);
    }
    // useEffect(() => {
    // }, [players])

    // 
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
                <Modal.Title>Upcoming Games</Modal.Title>
                </Modal.Header>
            <Modal.Body>
            {/*  */}
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Ground</th>
                        <th>Against</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <td>{game.map(match => <tr> {match.game_date}</tr>)}</td> 
                    <td>{game.map(match => <tr> {match.venue}</tr>)}</td> 
                    <td>{game.map(match => <tr> {match.opposition_team}</tr>)}</td> 
                    <td>{game.map(match => <tr> {match.game_time}</tr>)}</td>
                </tbody>
            </table>
            {/*  */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleShow}>Close</Button>
            </Modal.Footer>
            </Modal> 
        </div>
    );
}

export default DisplayGames;