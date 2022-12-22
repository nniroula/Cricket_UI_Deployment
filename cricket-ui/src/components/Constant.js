// const BCRYPT_WORK_FACTOR = () => {
//     return 12;
// }
const BCRYPT_WORK_FACTOR = 12;

const RETRIEVE_GAMES_URL = 'http://localhost:3000/games';
const CREATE_GAMES_ENDPOINT = 'http://localhost:3000/games';

const RETRIEVE_ADMINS_URL = 'http://localhost:3000/users/admins';


const RETRIEVE_PLAYERS_URL = 'http://localhost:3000/players';

const SIGN_UP_ENDPOINT = 'http://localhost:3000/users';

// export default BCRYPT_WORK_FACTOR;
export {BCRYPT_WORK_FACTOR, 
    RETRIEVE_GAMES_URL, 
    RETRIEVE_ADMINS_URL, 
    RETRIEVE_PLAYERS_URL, 
    SIGN_UP_ENDPOINT,
    CREATE_GAMES_ENDPOINT 
};



// module.exports = Object.freeze({
//     API_ERROR: 'Oops, something went wrong',
//     // BASE_URL_API: 'https://fellowship-of-the-string-api.herokuapp.com',
//     BASE_URL_API: 'http://localhost:8085',
//     PLACEHOLDER_IMAGE: 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
//     PURCHASE_ENDPOINT: '/purchases/',
//     PRODUCTS_ACTIVE_ENDPOINT: '/products?active=true',
//     PRODUCTS: '/products',
//     PRODUCT_BRANDS_ENDPOINT: '/products/brands',
//     PRODUCT_CATEGORIES_ENDPOINT: '/products/categories',
//     PRODUCT_DEMOGRAPHICS_ENDPOINT: '/products/demographics',
//     PRODUCT_COLORS_ENDPOINT: '/products/colors',
//     PRODUCT_MATERIALS_ENDPOINT: '/products/materials',
//     PROMOS: '/promos',
//     WISHLIST: '/wishlist',
//     GOOGLE_CLIENT_ID: '472383439099-6dbeg14ue7q7iok8ct510ltqd9slf344.apps.googleusercontent.com' // ENTER CLIENT ID HERE
//   });