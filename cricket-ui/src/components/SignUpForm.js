import React, { useState } from 'react';

// All below is for 1 input field. If you have more than 1, you have to do something repeatedly. However, with
// es2015, use Computed Properties Names
/*
    Computed Properties
    let obj = {};
    let name = 'nk'
    obj[name] = 'Coder'

    But ES 2015, You do not have to make object first, compute the value insider obj literal
    let name = 'nk'
    let obj = {
        [name]: 'Coder'
    }

    USE OF computed property name in REact
    create one state, and intialize all form inpute fields as a single object
    const [formData, setFormData] = ({
        'firstanme' = '',
        'lastname' = ''
    })

    Define 1 generic onChange, make it dynamic and use it all formData fields(formData.username, formData.email)
*/

/*
const SignUpForm = () => {
    const [username, setUserName] = useState('nkn');

    const handleChange = (e) => { // this is the pattern for controlled input
        console.log(e.target.value);
        setUserName(e.target.value);
    }

    const handleSubmit =(evt) => {
        evt.preventDefault();
        alert(`The user name you submitted is ${username}`)
        setUserName(''); // set the input field to blank after submitting the form
    }
 
    return (
        // or <form onSubmit={handleSubmit} -> with this enter key also works
        <form> 
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="your name" value={username} onChange={handleChange} />
            //  use onClick attribute with button to know what is in state when btn is clicked
            //  when a button is clicked, a state variable holds the input value 
            <button onClick={handleSubmit}>Sign Up</button>
        </form>
    );
}

export default SignUpForm;
*/


const SignUpForm = () => {

    const INITIAL_FORM_DATA = {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        email: '',
        phone_number: '',
        is_admin: 'false',
        start_date: ''
    };


    // const [username, setUserName] = useState('nkn');
    // const [formData, setFormData] = useState({
    //     username: '',
    //     lastname: ''
    // })
    const [formData, setFormData] = useState({INITIAL_FORM_DATA});

    const handleSubmit =(evt) => {
        evt.preventDefault();
        const { username, lastname } = formData;
        alert(`The user name you submitted is ${username}`)
        // setFormData(''); // set the input fields to blank after submitting the form
    }

    const handleChange = (e) => {
        e.preventDefault();
        // console.log(e.target.name); // label name of the input field
        // console.log(e.target.value); // value in that input field
        // const { name, value } = e.target;
        setFormData(data => ({ ...data, [e.target.name]: e.target.value })); //es2015 comuted Property names
        // setFormData(data => ({ ...data, [name]: value })); //es2015 comuted Property names
    }
 
    return (
        // or <form onSubmit={handleSubmit} -> with this enter key also works
        <form onSubmit={handleSubmit}> 
            <div>
                <label htmlFor="firstname">First Name</label>
                <input type="text" 
                    id="firstname" 
                    placeholder="your first name" 
                    value={formData.first_name} 
                    name="first_name" // name attribute should be same as the state variable
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" 
                    id="lastName" 
                    placeholder="your last name" 
                    value={formData.last_name} 
                    name="last_name" // name attribute should be same as the state variable
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" 
                    id="username" 
                    placeholder="your name" 
                    value={formData.username} 
                    name="username" // name attribute should be same as the state variable
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" 
                    id="password" 
                    placeholder="enter a password" 
                    value={formData.password} 
                    name="password" // name attribute should be same as the state variable
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" 
                    id="email" 
                    placeholder="your email" 
                    value={formData.email} 
                    name="email" // name attribute should be same as the state variable
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="phone_number">Phone</label>
                <input type="text" 
                    id="phone_number" 
                    placeholder="your phone number" 
                    value={formData.phone_number} 
                    name="phone_number" // name attribute should be same as the state variable
                    onChange={handleChange} 
                />
            </div>
            <div>
            {/* Mask admin and set to to No, select option as well - user type = general */}
                <label htmlFor="is_admin">Admin</label>
                <input type="text" 
                    id="is_admin" 
                    placeholder="your admin status" 
                    value={formData.is_admin} 
                    name="is_admin" // name attribute should be same as the state variable
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="start_date">Start Date</label>
                <input type="text" 
                    id="start_date" 
                    placeholder="your name" 
                    value={formData.start_date} 
                    name="start_date" // name attribute should be same as the state variable
                    onChange={handleChange} 
                />
            </div>


            {/* <button onClick={handleSubmit}>Sign Up</button> */}
            <button>Sign Up</button>
        </form>
    );
}

export default SignUpForm;
