import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import LogInTracker from '../auth/LoginTracker';
import CreateGames from './CreateGames';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { GAMES_ENDPOINT } from '../Constant';
import axios from 'axios';
import UpdateGames from './UpdateGames';
import styles from '../../stylesheet/Games.module.css';
import {toast, ToastContainer} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';   


const DisplayGames = ({ games, clicked }) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    const [gameCreated, setGameCreated] = useState(false);
    const [gameUpdated, setGameUpdated] = useState(false);
    const [gameToBeUpdated, setGameToBeUpdate] = useState({});
    const signedInUser = LogInTracker();
    let isSignedIn = false;
    const matches = [];

    for(let val in games){
        matches.push(games[val]);
    }

    if(signedInUser != undefined){
        isSignedIn = signedInUser.is_admin;
    }else{
        isSignedIn = false;
    }
  
    const handleShow = () => {
        setShow(!show);
        clicked = !clicked;
        navigate('/');
    }

    const addGame = () => {
        setGameCreated(!gameCreated);
    }

    const hanldeDelete = async (game) => {
        const { id } = game;
        const delete_url = `${GAMES_ENDPOINT}/${id}`;
        const  jwt_token = signedInUser.jwt_token;

        if(signedInUser != undefined && signedInUser.is_admin === true){
            try{
                await axios.delete(
                    delete_url,
                    {data: {
                        'jwt_token': jwt_token
                        },
                    }
                );
                navigate('/');
            }catch(e){
                console.log(e);
            }
        }
        toast.error('You cannot delete game.');
    }

    const hanldeUpdate = (game) => {
        setGameUpdated(!gameUpdated);
        setGameToBeUpdate(game);
    }

    useEffect(() => {
        const loggedInUser = signedInUser;
        if (loggedInUser) {
            isSignedIn = loggedInUser.is_admin;
        }
    }, [signedInUser]);

    return(
        <>
            {isSignedIn ?     
                <div>
                    <Modal show={show} backdrop="static" keyboard={false}>
                        <Modal.Header>
                        <Modal.Title className={styles.ModalTitle}>Upcoming Games</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {gameUpdated && <UpdateGames gameToBeUpdated={gameToBeUpdated} />}
                            {gameCreated && <CreateGames />}
                            <button onClick={addGame}>Add Game</button>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Ground</th>
                                        <th>Against</th>
                                        <th>Time</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>               
                                    <td>{matches.map(match => <tr> {match.game_date}</tr>)}</td> 
                                    <td>{matches.map(match => <tr> {match.venue}</tr>)}</td> 
                                    <td>{matches.map(match => <tr> {match.opposition_team}</tr>)}</td> 
                                    <td>{matches.map(match => <tr> {match.game_time}</tr>)}</td>
                                    <td className={styles.GamesTD}>{matches.map((match) => 
                                        <tr className={styles.GamesTDButtons}>
                                            <button className={styles.UpDelButtons} onClick={() => hanldeDelete(match)}><DeleteIcon /></button>
                                            <button className={styles.UpDelButtons} onClick={() => hanldeUpdate(match)}><EditIcon /></button>
                                        </tr>
                                        )}
                                    </td>
                                </tbody>
                            </table>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleShow}>Close</Button>
                        </Modal.Footer>
                    </Modal> 
                </div>:
                <div>
                    <Modal show={show} backdrop="static" keyboard={false}>
                        <Modal.Header>
                        <Modal.Title className={styles.ModalTitle}>Upcoming Games</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
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
                                    <td>{matches.map(match => <tr> {match.game_date}</tr>)}</td> 
                                    <td>{matches.map(match => <tr> {match.venue}</tr>)}</td> 
                                    <td>{matches.map(match => <tr> {match.opposition_team}</tr>)}</td> 
                                    <td>{matches.map(match => <tr> {match.game_time}</tr>)}</td>
                                </tbody>
                            </table>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleShow}>Close</Button>
                        </Modal.Footer>
                    </Modal> 
                </div>
            }
            <ToastContainer />
        </>
    );
}

export default DisplayGames;