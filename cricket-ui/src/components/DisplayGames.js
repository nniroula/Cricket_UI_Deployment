import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import logInTracker from './auth/loginTracker';

import CreateGames from './games/CreateGames';
import styles from '../stylesheet/Games.module.css';


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
        // const loggedInUser = localStorage.getItem('loggedInUser');
        const loggedInUser = signedInUser;
     
        if (loggedInUser) {
            // isSignedIn = JSON.parse(loggedInUser).is_admin;
            isSignedIn = loggedInUser.is_admin;
        }
    }, [signedInUser]);
// }, [isSignedIn]);

    const addGame = () => {
        console.log("add game");
        setCalled(!called);
    //    <CreateGames />;
    //    console.log("add game again");

    //    return <CreateGames />;
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
                                <td>{game.map(() => <tr> <button>delete</button><button>update</button></tr>)}</td>
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



/*

import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()

  const handleSubmit = async e => {
    
  };

/ if there's a user show the message below
  if (user) {
    return <div>{user.name} is loggged in</div>;
  }

  / if there's no user, show the login form
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        placeholder="enter a username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default App;


const handleSubmit = async e => {
  e.preventDefault();
  const user = { username, password };
  / send the username and password to the server
  const response = await axios.post(
    "http://blogservice.herokuapp.com/api/login",
    user
  );
  / set the state of the user
  setUser(response.data)
  / store the user in localStorage
  localStorage.setItem('user', response.data)
  console.log(response.data)
};

 useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

*/