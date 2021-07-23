// Iteration #1
const mongoose = require('mongoose');
const droneModel = require('../models/Drone.model');

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];


mongoose
    .connect("mongodb://localhost:27017/lab-express-drones", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Succesfully connected to the server to seed");

        droneModel.create(drones)
            .then((seededDocs) => { console.log(`We have created : ${seededDocs.length} drones`);
            mongoose.disconnect()
                .then(()=>{console.log("Connection Closed");})
                .catch((error)=>{console.log(error)}); 
        })
            .catch((error) => { console.log(error); })
    })
    .catch((error) => { console.log(error); });

