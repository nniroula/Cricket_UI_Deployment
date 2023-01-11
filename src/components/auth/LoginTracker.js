const LogInTracker = () => {
    const signedInUser = localStorage.getItem('loggedInUser');
    const loggedInUserCredentials = JSON.parse(signedInUser);

    return loggedInUserCredentials;
};

export default LogInTracker;
