import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayPlayers from '../components/players/DisplayPlayers';
import { RETRIEVE_PLAYERS_URL } from '../components/Constant';
import { useNavigate } from 'react-router-dom';
import styles from './../stylesheet/Admins.module.css';

const FetchPlayers = () => {
    const [players, setPlayers] = useState({});
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const getAllPlayers = () =>{
        const url = RETRIEVE_PLAYERS_URL;
            axios.get(url).then((response) => {
            const data = response.data;
            setPlayers(data);
        }).catch(error => console.error(error));

        setClicked(!clicked);
        navigate('/fetchPlayers');
    }

    return(
        <div>
            {clicked ? <DisplayPlayers players={players} clicked={clicked} /> 
            : <button className={styles.ViewButtons} onClick={getAllPlayers}>View Players</button> }
        </div>
    );
}

export default FetchPlayers;