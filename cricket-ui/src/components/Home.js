import React, {useState} from 'react';
import DisplayGames from './DisplayGames';
import FetchGames from '../api-services/FetchGames';
import DisplayPlayers from './DisplayPlayers';
import FetchPlayers from '../api-services/FetchPlayers';


// import { useNavigate } from 'react-router-dom';  const navigate = useNavigate();   navigate('/');

const Home = () => {
   const [fetched, setFetched] = useState(true);
   const [displayed, setDisplayed] = useState(false);
   const handleClick = () => {
    <DisplayGames />;
    setFetched(!fetched);
   }

    return (
        <>
            <p>This is a home page and will render games</p>
           <FetchGames />
           <FetchPlayers />
        </>
    )
}

export default Home;