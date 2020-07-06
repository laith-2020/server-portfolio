'use strict';

//we create a variable called express to use the express library
//like import the  library
const express = require('express');

// initilize the server (that the server variable it have every thing in express library)
//here like to use the library
const server = express();


// create a PORT number (3000)
const PORT = process.env.PORT || 3000;

// this line to run the files in folder public 
server.use(express.static('./public'));


// killall -s KILL node   (this command we write it inside the ubuntu to kill the process


//http://localhost:3000
// to creat a root after the ////http://localhost:3000
//the first parameter in the get method for the name of root for example here (test) name of the root ,  and the second is for 
// callback function (request,response) that we are try to send a request 
// and response with the message 

// server.get('/test', (request, response) => {
//     response.send('you are doing greate');
// });


//to get data port and we have the result laith aldaree
server.get('/data', (request, response) => {
    let family = [
        { name: 'laith' },
        { name: 'aldaree' }
    ];
    response.json(family);
});

//to listen to the port & the consol here it console in the ubuntu and till you what is the port doing
server.listen(PORT, () => {
    console.log('listening on port', PORT);
});