const express = require('express');
const mongoose = require('mongoose');

const CreateHomeCheckIn = require('./Controller/createHomeCheckIn')
const app = express();
app.use(express.json());

mongoose.connect("mongodb://root:password@10.138.38.65:27017/SOA_HomeCheckInDB?authSource=admin",{ useNewUrlParser : true,useUnifiedTopology : true }).then(data =>{
    const url='/api/SOA'
    app.post(url+'/home/checkin',CreateHomeCheckIn);

    const PORT = 3000;

    app.listen(PORT,() => {
        console.log('server is running on port 3000');
    })
}).catch(err => {
    console.log(`Error in Mongo Connection ${err}`)
})
