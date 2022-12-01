import React, {useState} from 'react';
import axios from 'axios';
import DisplayGames from '../components/DisplayGames';
import { useNavigate } from 'react-router-dom';
import DisplayAdmins from '../components/DisplayAdmins';

// To hdndle error in axios  response.send(error.toJSON())


async function Signup(){
    // grab all the input from signup form and hash the password, then send to database
    const input = { title: 'formaData' };
    const response = await axios.post('http://localhost:3000/users', input);

    return (
       <div>
        <h1>Signed up successfully!!!</h1>
       </div>
    )
}

export default Signup;


// async componentDidMount() {
//     // POST request using axios with async/await
//     const article = { title: 'React POST Request Example' };
//     const response = await axios.post('https://reqres.in/api/articles', article);
//     this.setState({ articleId: response.data.id });
// }


/*

const [admins, setAdmins] = useState({});
const [clicked, setClicked] = useState(false);
const navigate = useNavigate();

const getAllAdmins = () => {
    const url = 'http://localhost:3000/users/admins';
    const adminsData = await axios.post(url).then((response) => {
        const data = response.data;
        setAdmins(data);
    // }).catch(error => console.error(error));

    // navigate('/games');
    navigate('/admins');
    setClicked(!clicked);
}
*/





