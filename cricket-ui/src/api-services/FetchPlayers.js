import React, { useState } from 'react';
import axios from 'axios';
import DisplayPlayers from '../components/players/DisplayPlayers';
import { PLAYERS_URL } from '../components/Constant';
import styles from './../stylesheet/Admins.module.css';

const FetchPlayers = () => {
    const [players, setPlayers] = useState({});
    const [clicked, setClicked] = useState(false);

    const getAllPlayers = () =>{
        const url = PLAYERS_URL;
        axios.get(url).then((response) => {
            const data = response.data;
            setPlayers(data);
        }).catch(error => console.error(error));
        setClicked(!clicked);
    }

    return(
        <div>
            { clicked ? <DisplayPlayers players={players} clicked={clicked} /> 
                : <button className={styles.ViewButtons} onClick={getAllPlayers}>View Players</button> 
            }
        </div>
    );
}

export default FetchPlayers;