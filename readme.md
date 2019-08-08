**FriendFinder**  a Node.JS and Express application that processes a user survey and matches you to friends based on your answer.

***Fully developed by Kevin Steele for GWU Full Stack Web Development BootCamp* 

**Github Repo**: https://github.com/kevdsteele/FriendFinder

**Heroku hosted website**: https://shielded-mountain-62873.herokuapp.com/

**Dependencies**:

- [Node.JS](https://nodejs.org/en/) and [Express](https://www.npmjs.com/package/express) must me installed to run locally 

**Organization**: 

- *Server.js*

  Contains the core Node modules to lunch the web server and link to the apiRoutes.js and htmlRoutes.js files

- */app/data/friends.js*

  Contains the friendsData array to be used for matching 

- */app/public/home.html*

  This is the home page for the application 

- */app/public/survey.html*

  This is the survey page for the application 

- */app/routing/apiRoutes.js*

  This file contains the logic for processing the API get request and post request

- */app/routing/htmlRoutes.js*

  This file contains the logic for processing html requests and routign to either the home page or survey page 