import React, {useState} from 'react';
import axios from 'axios';
import DisplayAdmins from '../components/admins/DisplayAdmins';
import { RETRIEVE_ADMINS_URL } from '../components/Constant';
import styles from './../stylesheet/Admins.module.css';


const FetchAdmins = () => {
    const [admins, setAdmins] = useState({});
    const [clicked, setClicked] = useState(false);

    const getAllAdmins = () => {
        const url = RETRIEVE_ADMINS_URL
        axios.get(url).then((response) => {
            const data = response.data;
            setAdmins(data);
        }).catch(error => console.error(error));
        setClicked(!clicked); 
    }

    return (
        <div>
            {clicked ? <DisplayAdmins admins={admins} clicked={clicked} /> : 
            <button className={styles.ViewButtons} onClick={getAllAdmins}>View Admins</button> } 
        </div>
    )
}

export default FetchAdmins;






