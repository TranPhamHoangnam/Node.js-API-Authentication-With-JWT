const router = require("express").Router();
const User = require('../models/User');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const { registerValidation, loginValidation } = require("../validation");

router.get("/register", async (req, res) => {

    // LETS VALIDATE THE DATE BEFORE WE A USER
    const { error } = registerValidation(req.body);

    if(error) return res.status(400).send(error.details[0].message)

    // check if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if(emailExist) return res.status(400).send("Email already exist");


    // hash passwords
    var salt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(req.body.password, salt);


    // create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    })
    try{
        // lưu người dùng
        const saveUser = await user.save();
        res.send(saveUser);

    }catch(err){
        res.status(400).send(err);
    }

})

// LOGIN
router.post('/login',async (req, res) => {
    // LETS VALIDATE THE DATE BEFORE WE A USER
    const { error } = loginValidation(req.body);

    if(error) return res.status(400).send(error.details[0].message)

    // checking if the email exist
    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).send("Email is not found");

    // PASSWORD IS CORRECT
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid Password');


    // Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token);

})


module.exports = router;