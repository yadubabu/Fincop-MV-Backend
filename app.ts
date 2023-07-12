import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './dbConnect';
import mongoose from 'mongoose';

const app=express();

app.use(express.json());

app.use('/',(req,res)=>{
    res.send('Hello World')
})

mongoose.connect(connect).then(()=>{
    console.log('DB Connected');
    
})

app.listen(5000,()=>{
    console.log('Server is Running on 5000');
    
});
