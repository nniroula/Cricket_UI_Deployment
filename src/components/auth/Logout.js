import React from 'react';
import Home from '../Home';

const Logout = () => {
    const userInLocalStorage = localStorage.getItem('loggedInUser');
    localStorage.removeItem(userInLocalStorage );
    localStorage.clear();

    return (
        <div>
            <Home />
        </div>
    )
}
export default Logout;
