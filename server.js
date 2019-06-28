//step1:Include all modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB');
const app= express();
const apiempRouter=require('./server/api-employee.route');
//Step2:configuration to database
mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true}).then(
    () => console.log("Database Connected"),
    (err)=>console.log("Failed to Connect to database")
);
//Step 3: Handling app static resource and api call
/*express.static(loads static assets like html files images js etc.)
,express.json(req with JSON payloads)
,express.urlencoded(incoming url req) */

app.use(bodyParser.json());
app.use(cors());
//public:folder which contains all static res
//else provide 'dist/my-app06'
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,resp)=>{
    resp.sendFile("index.html");
});
//to call apiEmployeeroute
app.use('/emp',apiempRouter);

app.listen(4000,()=>{console.log("Server Listening at 4000")});