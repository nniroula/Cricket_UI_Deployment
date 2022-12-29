import styles from '../../stylesheet/DisplayPlayers.module.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

// 
import logInTracker from '../auth/loginTracker';
import CreatePlayers from './CreatePlayers';
import { PLAYERS_URL } from '../Constant';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import UpdatePlayers from './UpdatePlayers';


// 


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

    // 
    const signedInUser = logInTracker();
    let isSignedIn = false;

    if(signedInUser != undefined){
        isSignedIn = signedInUser.is_admin;
    }else{
        isSignedIn = false;
    }

    const [playerCreated, setPlayerCreated] = useState(false);
    const [playerUpdated, setPlayerUpdated] = useState(false);
    const [playerToBeUpdated, setPlayerToBeUpdate] = useState({});
    
    // for(let admin in players){
    //     adminUsers.push(admins[admin]);
    // }

    const addPlayer = () => {
        setPlayerCreated(!playerCreated);
    }

    const hanldeDelete = async (player) => {
        const { id } = player;
        const delete_url = `${PLAYERS_URL}/${id}`;
        const  jwt_token = signedInUser.jwt_token;

        if(player.username !== signedInUser.username){console.log(player);}

        if(signedInUser != undefined && signedInUser.is_admin === true){
            try{
                await axios.delete(
                    delete_url,
                    {data: {
                        'jwt_token': jwt_token
                        },
                    }
                );
                navigate('/fetchPlayers');
            }catch(e){
                console.log(e);
            }
        }
        // else react toast, you cannot delete!
    }


    const hanldeUpdate = (player) => {
        // if(admin.username === signedInUser.username){
            setPlayerUpdated(!playerUpdated);
            setPlayerToBeUpdate(player);
        // }
    }

    // 

    return(
        <div className={styles.PlayersInfo}>
            {isSignedIn? <div>
                <Modal
                show={show}
                backdrop="static"
                keyboard={false}
            >
            <Modal.Header>
                <Modal.Title>Players</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                {/* 
                {adminCreated && <CreateAdmin />}
                <button onClick={addAdmin}>New Admin</button>
                 {adminUpdated && <UpdateAdmins adminToBeUpdated={adminToBeUpdated} />}
                */}

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

                    {/* <td className={styles.createAdminTD}> {adminUsers.map((admin) => 
                        <tr className={styles.TDButtons}>
                            <button className={styles.UpDelButtons} onClick={() => hanldeDelete(admin)}> <DeleteIcon /> </button>
                            <button className={styles.UpDelButtons} onClick={() => hanldeUpdate(admin)}> <EditIcon /> </button> 
                        </tr>
                        )}
                    </td>  */}
                </tbody>
            </table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleShow}>Close</Button>
            </Modal.Footer>
            </Modal> 

            </div>: 
            // 
            <div>   
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
            </Modal> </div>}
         
        </div>
    );
}

export default DisplayPlayers;


/*
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import logInTracker from '../auth/loginTracker';
import CreateGames from './CreateGames';
import styles from '../../stylesheet/Games.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { GAMES_ENDPOINT } from '../Constant';
import axios from 'axios';
import UpdateGames from './UpdateGames';


const DisplayGames = ({ games, clicked }) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    const [gameCreated, setGameCreated] = useState(false);
    const [gameUpdated, setGameUpdated] = useState(false);
    const [gameToBeUpdated, setGameToBeUpdate] = useState({});

    const signedInUser = logInTracker();
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
                navigate('/fetchGames');
            }catch(e){
                console.log(e);
            }
        }
        // else react toast, you cannot delete!
    }

    const hanldeUpdate = (game) => {
        const { id } = game;
        setGameUpdated(!gameUpdated);
        const  jwt_token = signedInUser.jwt_token;
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
                    <Modal
                        show={show}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header>
                        <Modal.Title>Upcoming Games</Modal.Title>
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
                        
                                <td className={styles.createAdminTD}>{matches.map((match) => 
                                    <tr className={styles.TDButtons}>

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
                <Modal
                    show={show}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                    <Modal.Title>Upcoming Games</Modal.Title>
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
        </>
    );
}

export default DisplayGames;

/*

        <td className={styles.createAdminTD}> {adminUsers.map((admin) => 
                            <tr className={styles.TDButtons}>
                                <div className={styles.IconDiv}>
                                <button className={styles.UpDelButtons} onClick={() => hanldeDelete(admin)}> <DeleteIcon /> </button>
                                <button className={styles.UpDelButtons} onClick={() => hanldeUpdate(admin)}> <EditIcon /> </button>
                                </div>
                            </tr>
                        )}
                    </td> 
*/
