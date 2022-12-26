import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayPlayers from '../components/players/DisplayPlayers';
import { RETRIEVE_PLAYERS_URL } from '../components/Constant';

import { useNavigate } from 'react-router-dom';

const FetchPlayers = () => {
    const [players, setPlayers] = useState({});
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const getAllPlayers = () =>{
        //  const url = 'http://localhost:3000/players';
        const url = RETRIEVE_PLAYERS_URL;
        const playersData = axios.get(url).then((response) => {
            const data = response.data;
            setPlayers(data);
        }).catch(error => console.error(error));

        navigate('/players');
        setClicked(!clicked);
    }

    // when the page renders
//     useEffect(() => {
//         getAllPlayers();
//    }, []);
    return(
        <div>
            {clicked ? <DisplayPlayers players={players} clicked={clicked} /> : <button onClick={getAllPlayers}>View Players</button> }
        </div>
    );
}

export default FetchPlayers;