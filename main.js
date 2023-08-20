const express = require('express')
var events = require('events');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const router = require("./routes/index");
const connectDB = require('./database/db');
app.set("view engine",'pug');
app.use(bodyParser.json())
app.use(router);
connectDB().then(()=>{
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})