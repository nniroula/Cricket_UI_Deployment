import React, {useState} from 'react';
import axios from 'axios';
import DisplayGames from '../components/games/DisplayGames';
import { useNavigate } from 'react-router-dom';
import { RETRIEVE_GAMES_URL  } from '../components/Constant';


const FetchGames = () => {
    const [games, setGames] = useState({});
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const getAllGames = () => {
        // const url = 'http://localhost:3000/games';
        const url = RETRIEVE_GAMES_URL ;
        const gamesData = axios.get(url).then((response) => {
            const data = response.data;
            setGames(data);
           
        }).catch(error => console.error(error));
 
        navigate('/games');
        setClicked(!clicked);
    }

    return (
        <div>
            {clicked ? <DisplayGames games={games} clicked={clicked} /> : <button onClick={getAllGames}>View Games</button> }
        </div>
    )
}

export default FetchGames;






