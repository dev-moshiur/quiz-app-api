
const express=require('express');
const mongoose=require('mongoose');
const multer=require('multer')
const cors=require('cors');
const dotenv =require('dotenv');
const JWT =require('jsonwebtoken');
const quize=require('./routes/quize')
const auth=require('./routes/auth')

const port=process.env.PORT || 5000;

const uri='mongodb+srv://moshiur:(masud422)@cluster0.7izsgvf.mongodb.net/?retryWrites=true&w=majority'

const app=express();


app.use(cors())
app.use(express.json())

dotenv.config();
app.get('/',(req,res)=>{
    res.send('This server is running')
})

app.use('/quize',quize)
app.use('/auth',auth)


mongoose.connect(uri,)
        .then(()=>console.log('DB is connected mow'))
        .catch((err)=>console.log('Not Connected',err));

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})