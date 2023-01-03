import React, {useState} from 'react';
import axios from 'axios';
import DisplayGames from '../components/games/DisplayGames';
import { RETRIEVE_GAMES_URL  } from '../components/Constant';
import styles from './../stylesheet/Admins.module.css';


const FetchGames = () => {
    const [games, setGames] = useState({});
    const [clicked, setClicked] = useState(false);

    const getAllGames = () => {
        const url = RETRIEVE_GAMES_URL ;
        axios.get(url).then((response) => {
            const data = response.data;
            setGames(data);
           
        }).catch(error => console.error(error));
        setClicked(!clicked);
    }

    return (
        <div>
            { clicked ? <DisplayGames games={games} clicked={clicked} /> 
                : <button className={styles.ViewButtons} onClick={getAllGames}>View Games</button> 
            }
        </div>
    )
}

export default FetchGames;






