import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import LogInTracker from '../auth/LoginTracker';
import CreatePlayers from './CreatePlayers';
import { PLAYERS_URL } from '../Constant';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import UpdatePlayers from './UpdatePlayers';
import styles from '../../stylesheet/Players.module.css';
import {toast, ToastContainer} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';   


const DisplayPlayers = ({ players, clicked }) => {
    const playerGroup = [];
    for(let val in players){
        playerGroup.push(players[val]);
    }

    const navigate = useNavigate(); 
    const [show, setShow] = useState(true);
    const handleShow = () => {
        setShow(!show);
        clicked = !clicked;
        navigate('/');
    }

    let isSignedIn = false;
    const signedInUser = LogInTracker();
  
    if(signedInUser != undefined){
        isSignedIn = signedInUser.is_admin;
    }else{
        isSignedIn = false;
    }

    const [playerCreated, setPlayerCreated] = useState(false);
    const [playerUpdated, setPlayerUpdated] = useState(false);
    const [playerToBeUpdated, setPlayerToBeUpdate] = useState({});

    const addPlayer = () => {
        setPlayerCreated(!playerCreated);
    }

    const hanldeDelete = async (player) => {
        const { id } = player;
        const delete_url = `${PLAYERS_URL}/${id}`;
        const  jwt_token = signedInUser.jwt_token;

        if(signedInUser !== undefined && signedInUser.is_admin === true){
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
        toast.error("You cannot delete player!");
    }

    const hanldeUpdate = (player) => {
            setPlayerUpdated(!playerUpdated);
            setPlayerToBeUpdate(player);
    }

    return(
        <div className={styles.PlayersInfo}>
            {isSignedIn ? 
            <div>
                <Modal
                    show={show}
                    backdrop="static"
                    keyboard={false}
                >
                <Modal.Header>
                    <Modal.Title className={styles.ModalTitle}>Players</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {playerCreated && <CreatePlayers />}
                    <button onClick={addPlayer}>New Player</button>
                    {playerUpdated && <UpdatePlayers playerToBeUpdated={playerToBeUpdated} />}
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Playing Role</th>
                                <th>Start Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>{playerGroup.map(pl => <tr> {pl.first_name}</tr>)}</td> 
                            <td>{playerGroup.map(pl => <tr> {pl.last_name}</tr>)}</td> 
                            <td>{playerGroup.map(pl => <tr> {pl.playing_role}</tr>)}</td> 
                            <td>{playerGroup.map(pl => <tr> {pl.registered_date}</tr>)}</td>
                            <td> {playerGroup.map((player) => 
                                <tr> 
                                    <button className={styles.UpDelButtons} onClick={() => hanldeDelete(player)}> <DeleteIcon /> </button>
                                    <button className={styles.UpDelButtons} onClick={() => hanldeUpdate(player)}> <EditIcon /> </button> 
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
                <Modal
                    show={show}
                    backdrop="static"
                    keyboard={false}
                >
                <Modal.Header>
                    <Modal.Title className={styles.ModalTitle}>Players</Modal.Title>
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
                        <td>{playerGroup.map(pl => <tr> {pl.first_name}</tr>)}</td> 
                        <td>{playerGroup.map(pl => <tr> {pl.last_name}</tr>)}</td> 
                        <td>{playerGroup.map(pl => <tr> {pl.playing_role}</tr>)}</td> 
                        <td>{playerGroup.map(pl => <tr> {pl.registered_date}</tr>)}</td>
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
        </div>
    );
}

export default DisplayPlayers;