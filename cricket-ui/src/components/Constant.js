// const BCRYPT_WORK_FACTOR = () => {
//     return 12;
// }
const BCRYPT_WORK_FACTOR = 12;

// use games endpoint for games related things
const RETRIEVE_GAMES_URL = 'http://localhost:3000/games';
const CREATE_GAMES_ENDPOINT = 'http://localhost:3000/games';
// const GET_GAME_BY_ID_ENDPOINT = 'http://localhost:3000/games/1'
// const GET_GAME_BY_ID_ENDPOINT = 'http://localhost:3000/games/1'
const GAMES_ENDPOINT = 'http://localhost:3000/games';

const RETRIEVE_ADMINS_URL = 'http://localhost:3000/users/admins';
const CREATE_ADMIN_ENDPOINT = 'http://localhost:3000/users/admin';
// http://localhost:3000/user/login  // login admin
// http://localhost:3000/users/admin/8 delete admin
// http://localhost:3000/users/admin/7 update admin


const RETRIEVE_PLAYERS_URL = 'http://localhost:3000/players';
const PLAYERS_URL = 'http://localhost:3000/players'; // create player
// http://localhost:3000/players/1 // delete player

const SIGN_UP_ENDPOINT = 'http://localhost:3000/users';


// export default BCRYPT_WORK_FACTOR;
export {BCRYPT_WORK_FACTOR, 
    RETRIEVE_GAMES_URL, 
    RETRIEVE_ADMINS_URL, 
    RETRIEVE_PLAYERS_URL, 
    SIGN_UP_ENDPOINT,
    CREATE_GAMES_ENDPOINT,
    GAMES_ENDPOINT,
    CREATE_ADMIN_ENDPOINT,
    PLAYERS_URL
};
