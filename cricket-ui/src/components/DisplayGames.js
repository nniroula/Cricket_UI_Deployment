import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import logInTracker from './auth/loginTracker';
import CreateGames from './games/CreateGames';
import styles from '../stylesheet/Games.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { GAMES_ENDPOINT } from './Constant';
import axios from 'axios';


// npm install @mui/icons-material

const DisplayGames = ({ games, clicked }) => {
    const game = [];
    for(let val in games){
        game.push(games[val]);
    }

    const [called, setCalled] = useState(false);
    // const isSignedIn = logInTracker;
    // const signedInUser = localStorage.getItem('loggedInUser');
    const signedInUser = logInTracker();
    let isSignedIn = false;

    if(signedInUser != undefined){
        // isSignedIn = JSON.parse(signedInUser).is_admin;
        isSignedIn = signedInUser.is_admin;
    }else{
        isSignedIn = false;
    }
  
    const navigate = useNavigate(); 
    const [show, setShow] = useState(true);
    const handleShow = () => {
        setShow(!show);
        clicked = !clicked;
        navigate('/');
    }

    useEffect(() => {
        const loggedInUser = signedInUser;
        if (loggedInUser) {
            isSignedIn = loggedInUser.is_admin;
        }
    }, [signedInUser]);
// }, [isSignedIn]);

    const addGame = () => {
        setCalled(!called);
    }

    const hanldeDelete = async (game) => {
        const { id } = game;
        let delete_url = GAMES_ENDPOINT/id;
        const  jwt_token = signedInUser.jwt_token;
        if(signedInUser != undefined && signedInUser.is_admin === true){
            try{
                await axios.delete(
                    `http://localhost:3000/games/${id}`,
                    {data: {
                        'jwt_token': jwt_token
                        },
                    }
                );
            }catch(e){
                console.log(e);
            }
        }
    }

    return(
        // <div className={styles.PlayersInfo}>
        <>
            {isSignedIn ? 
                
                <div>
                    {/* <button onClick={addGame}>Add Game</button> */}
                    <Modal
                        show={show}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header>
                        <Modal.Title>Upcoming Games</Modal.Title>
                        </Modal.Header>
                    <Modal.Body>
                    {called && <CreateGames />}
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
                                {/* <td>{game.map(match => <tr> {match.game_date}</tr>)}</td> 
                                <td>{game.map(match => <tr> {match.venue}</tr>)}</td> 
                                <td>{game.map(match => <tr> {match.opposition_team}</tr>)}</td> 
                                <td>{game.map(match => <tr> {match.game_time}</tr>)}</td>
                                <td>{game.map(() => <tr> <button>delete</button><button>update</button></tr>)}</td> */}

                                <td>{game.map(match => <tr className={styles.createGamesTD}> {match.game_date}</tr>)}</td> 
                                <td>{game.map(match => <tr className={styles.createGamesTD}> {match.venue}</tr>)}</td> 
                                <td>{game.map(match => <tr className={styles.createGamesTD}> {match.opposition_team}</tr>)}</td> 
                                <td>{game.map(match => <tr className={styles.createGamesTD}> {match.game_time}</tr>)}</td>
                                {/* <td>{game.map(() => <tr className={styles.createGamesTD}><button>delete</button><button>update</button></tr>)}</td> */}
                                <td>{game.map((g) => <tr className={styles.createGamesTD}><button onClick={() => hanldeDelete(g)}><DeleteIcon /></button><button><EditIcon /></button></tr>)}</td>
                       
                             
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleShow}>Close</Button>
                    </Modal.Footer>
                    </Modal> 
                    {/* <Modal
                        show={show}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header>
                        <Modal.Title>Upcoming Games</Modal.Title>
                        </Modal.Header>
                    <Modal.Body> */}

                    {/* {called && <CreateGames />}
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
                                <td>{game.map(match => <tr> {match.game_date}</tr>)}</td> 
                                <td>{game.map(match => <tr> {match.venue}</tr>)}</td> 
                                <td>{game.map(match => <tr> {match.opposition_team}</tr>)}</td> 
                                <td>{game.map(match => <tr> {match.game_time}</tr>)}</td>
                                <td><button>delete</button><button>update</button></td>
                            </tbody>
                        </table> */}

                    {/* </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleShow}>Close</Button>
                    </Modal.Footer>
                    </Modal>  */}
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
                        <td>{game.map(match => <tr> {match.game_date}</tr>)}</td> 
                        <td>{game.map(match => <tr> {match.venue}</tr>)}</td> 
                        <td>{game.map(match => <tr> {match.opposition_team}</tr>)}</td> 
                        <td>{game.map(match => <tr> {match.game_time}</tr>)}</td>
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