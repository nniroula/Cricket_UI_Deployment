import React from 'react';
import styles from './DisplayPlayers.module.css';

// recieve players as props from FetchPlayers
const DisplayPlayers = ({ players }) => {
    const player = [];
    for(let val in players){
        player.push(players[val]);
    }

    // useEffect(() => {

    // }, [players])

    return(
        <div className={styles.PlayersInfo}>
                {/* <h4>Players</h4> */}
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
        </div>
    );
}

export default DisplayPlayers;