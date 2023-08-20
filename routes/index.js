const express = require("express");

const bookRouter = require("./books");
const authRouter = require("./auth");

const router = express.Router();

const path = require('path');

router.get('/', (req, res) => {
    res.render('index',{name:`Rotuer ${res.app._router}`});
});

router.post('/', (req, res) => {
    res.json({data:"Data is initializing"})
})

router.use('/book',bookRouter);
router.use('/auth',authRouter);

router.all("/*",(req,res)=>{
    res.sendFile(path.join(__dirname,"/../pages/404.html"));
});

module.exports = router;