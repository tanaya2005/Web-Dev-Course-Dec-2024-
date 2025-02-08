const mongoose= require ('mongoose')

const connection= mongoose.connect('mongodb://127.0.0.1:27017/NEW').then(()=>{
    console.log("connected to the database")
})
//connects to the db and also returns the data

module.exports=connection