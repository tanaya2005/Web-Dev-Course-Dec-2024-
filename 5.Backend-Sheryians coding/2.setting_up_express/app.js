const express= require ('express');
const morgan=require('morgan')
const app = express();
const userModel=require('./models/user')
const dbConnection=require('./config/db')

app.use(morgan('dev'))


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("view engine",'ejs')


app.get('/', (req, res)=>{
    res.render('index')
}) 

app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/profile', (req, res)=>{
    console.log('ehwg')
    res.render('PROFILE')
})


app.get('/register', async(req,res)=>{
    res.render('register')
}) //ye method form ko frontend pe show karega


app.post('/register', async (req,res)=>{    const {username,email,password}=req.body

const newuser= await userModel.create({
    username: username,
    email: email,
    password: password
})
    res.send('User registered!')
    // res.send(newuser)
}) // ye method actually user ko create karega db me



// app.get('/get-form-data', (req, res)=>{
//     console.log(req.query)
//     res.send('Data Recieved')
// })

app.get('/get-users', (req, res)=>{
        userModel.find({
            username: 'dd'
        }).then((users)=>{
            res.send(users)
        })
})

// app.get('/get-users',  (req, res)=>{
//     userModel.findOne({
//         username:'ff'
//     }).then((user)=>{
//         res.send(user)
//     })
// })


app.get('/update-user', async (req, res)=>{
  await  userModel.findOneAndUpdate({
        username: 'dd',
        password:'red'
    }, {
        email: 'd&d'
    })

    res.send('user updated')
})

app.get('/delete-user', async (req,res)=>{
    await userModel.findOneAndDelete({
        username: 'varun'
    })

    res.send('User Deleted')
})

// app.post('/get-form-data', (req, res)=>{
//     console.log(req.body)
//     res.send('Data Recieved')
// })

app.listen(3000)
