import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './dbConnect';
import mongoose from 'mongoose';
import {Request,Response,NextFunction} from 'express';
import userRoute from './routes/userRoute';
import cors from 'cors';
import transRoute from './routes/transRoute';

const app=express();

app.use(express.json());
app.use(cors({
    origin:'*'
}))
// app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req:Request,res:Response)=>{
    res.send('Hello World!!!!')
});


mongoose.connect(connect).then(()=>{
    console.log('DB Connected');
    
});
app.use('/user/getuser',userRoute);

app.use('/user/adduser',userRoute);

app.use('/user/login',userRoute);

app.use('/api/gettrans',transRoute);

app.use('/api/addtrans',transRoute);

app.listen(5000,()=>{
    console.log('Server is Running on 5000');
    
});
