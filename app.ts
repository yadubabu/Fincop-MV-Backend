import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './dbConnect';
import mongoose from 'mongoose';
import {Request,Response,NextFunction} from 'express';
import userRouter from './routes/userRoute';

const app=express();

app.use(express.json());



app.get('/',(req:Request,res:Response)=>{
    res.send('Hello World!!!!')
})

mongoose.connect(connect).then(()=>{
    console.log('DB Connected');
    
});

app.use('/adduser',userRouter);

app.listen(5000,()=>{
    console.log('Server is Running on 5000');
    
});
