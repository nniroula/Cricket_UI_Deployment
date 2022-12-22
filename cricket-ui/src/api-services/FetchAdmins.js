import React, {useState} from 'react';
import axios from 'axios';
import DisplayGames from '../components/DisplayGames';
import { useNavigate } from 'react-router-dom';
import DisplayAdmins from '../components/DisplayAdmins';
import { RETRIEVE_ADMINS_URL } from '../components/Constant';


const FetchAdmins = () => {
    const [admins, setAdmins] = useState({});
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const getAllAdmins = () => {
        // const url = 'http://localhost:3000/users/admins';
        const url = RETRIEVE_ADMINS_URL
        const adminsData = axios.get(url).then((response) => {
            const data = response.data;
            setAdmins(data);
        }).catch(error => console.error(error));
 
        // navigate('/games');
        navigate('/admins');
        setClicked(!clicked);
    }

    return (
        <div>
            {clicked ? <DisplayAdmins admins={admins} clicked={clicked} /> : <button onClick={getAllAdmins}>View Admins</button> }
        </div>
    )
}

export default FetchAdmins;






