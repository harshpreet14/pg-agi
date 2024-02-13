const User = require('../models/user')
const {hashPassword, comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async(req, res) =>{
    try{
        const {firstName, lastName, company, location, email, password} = req.body;
        // check if name was entered
        if(!firstName){
            return res.json({
                error:'Your first name is required.'
            })
        }
        if(!lastName){
            return res.json({
                error:'Your first name is required.'
            })
        }
        //check if password is good
        if(!password || password.length < 6){
            return res.json({
                error: 'Password should be atleast 6 characters long.'
            })
        }
        //Check email 
        const exist = await User.findOne({email})
        if(exist){
            return res.json({
                error : 'Email is already taken.'
            })
        }
        const hashedPassword = await hashPassword(password);

        const newUser = await User.create({
            firstName, lastName, company, location, email, password: hashedPassword
        })

        return res.json(newUser);

    }catch(error){
        console.log(error);
    }
}

const loginUser = async(req, res) =>{
    try{
        const {email, password} = req.body;
        //check if user exists
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error:'User not found! Please register.'
            })
        }
        //check if password match
        const match = await comparePassword(password, user.password)

        jwt.sign({email : user.email, id: user._id, firstName: user.firstName, lastName: user.lastName, company:user.company, location: user.location}, process.env.JWT_SECRET, {}, (err, token) => {
            if(err) throw err;
            res.cookie('token', token).json(user)
        })

        if(match){
            res.json('Passwords match')
        }
        if(!match){
           res.json({
            error: 'Password or Email is incorrect.'
           }) 
        }

    }catch(error){
        console.log(error)
    }
}

const getProfile = (req, res) =>{
    const {token} = req.cookies
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) =>{
            if(err) throw err
            res.json(user)
        })
    }else{
        res.json(null)
    }
}

module.exports = {
    test, registerUser, loginUser, getProfile
}