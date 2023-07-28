import UserModel from "../models/UserModel";
import * as bcrypt from 'bcrypt';
import {Request,Response,NextFunction} from 'express';

export const createUser=async(req:Request,res:Response,next:NextFunction)=>{
    const {name,email,password,confirmpassword,pancard,phone}=req.body;

             
                let hashPassword=await bcrypt.hash(password,12);
                console.log(hashPassword);
                try{
        
        const newUser=new UserModel({
            name,email,
            password:hashPassword,
            confirmpassword:hashPassword,
            pancard,phone
        })
        await newUser.save();
        return res.send('Added successfully');
    }
    catch(err){
        console.log(err);
        
    }
}