const mongoose = require ('mongoose')

const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    // contct:Number,
    // gender: {
    //     type:String,
    //     enum:['male', 'female']
    // }
});

const userModel = mongoose.model('user', userSchema);
//this is the variable that stores konsa table and konsa schema we are using

module.exports= userModel
//to connect the database to express