// Iteration #1 - 1.0: set up the phones routes

// !!! the step 1.1 is on 'app.js' to handle the phones routes on the app

const router = require("express").Router();

// Iteration #1 - 1.2: move the data folder into the server project and import it on phones.routes.js in order to use the data from the phones.json file
// import phoneData from '../data/phones.json'
const phoneData = require('../data/phones.json');


// Iteration #1 - 1.3: the first route on "http://localhost:5005/phones" should return a json file with all the data from phones.json

router.get("/", (req, res, next) => {
  res.json(phoneData);
});

// Iteration #1 - 1.4: the second route on "http://localhost:5005/phones/:phoneId" should get the phoneId from params and then use it to filter the phoneData array 
//                     to find the phone object and the send it back as a response

router.get("/:phoneId", (req, res, next) => {
    const {phoneId} = req.params;
    const phoneDetails = phoneData.filter((phone) => phoneId == phone.id)
    res.json(phoneDetails);
  });

  // Iteration #1 - 1.5: a recommendation of mine it would be that you get familiar with postman and you get used to create the backend routes first
  //                     and then test it on postman before implementing the frontend. 
  //                     In this case the way to do it is by simply making a GET request of the "http://localhost:5005/phones/" to retrieve all the phones data 
  //                     and another GET request on "http://localhost:5005/phones/:phoneId" to get the specific phone details (just change :phoneId for a number from 0 to 7) 

  //                     If you "ctrl+click" or "cmd+click" these urls it will open on the browser and it has the same functionallity as postman:
  //                     "http://localhost:5005/phones/" get all the phones 
  //                     "http://localhost:5005/phones/7" get a phone with id: 7
  //                     "http://localhost:5005/phones/3" get a phone with id: 3

module.exports = router;
