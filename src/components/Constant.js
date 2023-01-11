const BCRYPT_WORK_FACTOR = process.env.PASS_WORK_FACTOR;
// const BASE_URL = 'http://localhost:3000';
// const GAMES_ENDPOINT = `${BASE_URL}/games`;
// const RETRIEVE_ADMINS_URL = `${BASE_URL}/users/admins`;
// const CREATE_ADMIN_ENDPOINT = `${BASE_URL}/users/admin`;
// const PLAYERS_URL = `${BASE_URL}/players`;
// const SIGN_UP_ENDPOINT = `${BASE_URL}/users`;
// const LOGIN_ENDPOINT = `${BASE_URL}/user/login`;

const BASE_URL = 'https://aecc-api.herokuapp.com';
const GAMES_ENDPOINT = `${BASE_URL}/games`;
const RETRIEVE_ADMINS_URL = `${BASE_URL}/users/admins`;
const CREATE_ADMIN_ENDPOINT = `${BASE_URL}/users/admin`;
const PLAYERS_URL = `${BASE_URL}/players`;
const SIGN_UP_ENDPOINT = `${BASE_URL}/users`;
const LOGIN_ENDPOINT = `${BASE_URL}/user/login`;

export {BCRYPT_WORK_FACTOR, 
    RETRIEVE_ADMINS_URL, 
    SIGN_UP_ENDPOINT,
    GAMES_ENDPOINT,
    CREATE_ADMIN_ENDPOINT,
    PLAYERS_URL,
    LOGIN_ENDPOINT,
    BASE_URL
};
