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
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  droneModel.create(req.body)
    .then((createdDrone)=>{
      console.log(createdDrone);
      res.redirect('/drones');
    })
    .catch((error)=>{console.log(error);})
});

router.get('/drones/:id/edit', (req, res, next) => {
  droneModel.findById(req.params.id)
    .then((foundDrone)=>{
      console.log(foundDrone);
      res.render('drones/update-form.hbs', {
        drone: foundDrone,
      })
    })
    .catch((error)=>{console.log(error)});

});

router.post('/drones/:id/edit', (req, res, next) => {
  droneModel.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>res.redirect('/drones'))
    .catch((error)=>{console.log(error);})
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
