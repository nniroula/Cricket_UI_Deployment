
const logInTracker = () => {
    // let isSignedIn = false;
    const signedInUser = localStorage.getItem('loggedInUser');
    // const loggedInUserCredentials = JSON.parse(signedInUser).is_admin;
    const loggedInUserCredentials = JSON.parse(signedInUser);

    // return signedInUser;
    return loggedInUserCredentials;
};

export default logInTracker;
