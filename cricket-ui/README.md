## User Interface for the cricket club's API(Backend)

### Description  
The current focus of the project is to create a desktop web app for the sports club, and the stretch goal is to extend it be accessed on mobile/smart phones as well. The project involves creating an own API as well as using an external one.<br> <br>This Sports club's website is a ```Fullstack RESTful Web App```. The major technologies used in this project are ```NodeJS, ExpressJS, SQL, and PostgreSQL``` for creating an API(backend), along with ```HTML5 and CSS``` for the frontend in combination with a frontend ```JavaScript``` framework called ```ReactJS```. For the deployment of this project, website hosting site named ```Heroku``` is used. <br>

<br>

### Deployment
User Interface: ```https://aecc.herokuapp.com```. Click [Here](https://aecc.herokuapp.com) to access it.<br>
It's backend is available at the Site: ```https://aecc-api.herokuapp.com```

<br>



### User Access/Flow
#### Admin Users: 
- Note: You cannot sign up yourself. One admin user has to create another admin user. You cannot delete yourself. One admin user can delete another admin user.
- Once you are loggedin, you will be directed to home page. Click on the menu bar icon to access more functionalities. 
- - If you click on admins, players, or games in the menu list, You will be shown a button that displays either view admins, view players, or view games. Click on that button, it will render a modal respective to what you wanted to look into. For example, if you click on view admins button, it will render a modal that displays a table containing list of admins. There you will see pencil or trash can icon. If you click on the pencil Icon, you can update your own information. As an admin, you are not allow to update another admin's information. Clicking on trash icon would delete an admin, but you cannot delete yourself. You will also, see new admin button on the top of the table. If you click on that button, it will let you create new admin. Similar approach applies to accessing, creating, and updating games and players.
- Once you log out, the navigation link will change to sign up and log in. But menu icon stays unchanged.

<br>

#### General Users:
- Note: You can sign up to create an account, but this feature is nothing more than that currently.
- Click on Menu Icon at the far right top corner, it opens up the menu list links. Click on any one you want ot explore.
- If you click on Games, it will render a button that says View Games. If you click on it, it will display the game in the tabular form. And the same applies with Admins and Players.

<br>

### Payment Processing
- If you would like to test how the payment process would work, use the following information <br>
- - Card Number: 4242 4242 4242 4242
- - Exp 4/24
- - CVV 242

<br>

### External Dependencies
User Interface: ```https://aecc-api.herokuapp.com```. Click [Here](https://aecc-api.herokuapp.com) to access it.

<br>

### Simulation Steps

#### 1. Initial Project Setup
- Clone the project ```git clone this project's GitHub Repo url```.
- ```npm install``` -> this installs all the dependencies.

<br>

#### 2. Running Test files


<br>
<br>
<br>

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
