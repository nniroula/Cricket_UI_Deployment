import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayPlayers from './DisplayPlayers';

const FetchPlayers = () => {
    const [players, setPlayers] = useState({});

    const getAllPlayers = () =>{
         const url = 'http://localhost:3000/players';
        const playersData = axios.get(url).then((response) => {
            const data = response.data;
            setPlayers(data);
            // data.map(player => {
            //     const {first_name, last_name, playing_role, registered_date } = player;
            // })
        }).catch(error => console.error(error));
    }

    // when the page renders
//     useEffect(() => {
//         getAllPlayers();
//    }, []);
    return(
        <div>
            <DisplayPlayers players={players} />
            <button onClick={getAllPlayers}>Get Players in Display</button> 
        </div>
    );
}

export default FetchPlayers;