const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const droneModel=require('../models/Drone.model');

// require the Drone model here

router.get('/drones', (req, res, next) => {
  
  droneModel.find()
    .then((drones)=>{
      res.render('drones/list.hbs',{drones:drones,})
    })
    .catch((error)=>{console.log(error)});

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
