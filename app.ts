import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './dbConnect';
import mongoose from 'mongoose';
import {Request,Response,NextFunction} from 'express';
import UserModel from './models/UserModel';
import userRouter from './routes/userRoute';


const app=express();

app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })

mongoose.connect(connect).then(()=>{
    console.log('DB Connected');
    
});

app.post('/adduser',async(Request,Response)=>{
    const {name,email,password,confirmpassword,pancard,phone}=Request.body;
try{
const newUser=new UserModel({
    name,email,password,confirmpassword,pancard,phone
});
await newUser.save();
        return Response.send('Added successfully');
}
catch(err){
    console.log(err);
    
}
});

// app.use('/adduser',userRouter);

app.listen(5000,()=>{
    console.log('Server is Running on 5000');
    
});
