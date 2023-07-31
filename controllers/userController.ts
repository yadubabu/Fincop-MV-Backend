import UserModel from "../models/UserModel";
import * as bcrypt from 'bcrypt';
import AccountModel from '../models/AccountModel';
import {Request,Response,NextFunction} from 'express';

export const createUser=async(req:Request,res:Response,next:NextFunction)=>{
    const {name,email,password,confirmpassword,pancard,phone}=req.body;
         console.log(req.body);
      let hashPassword=await bcrypt.hash(password,12);
      if(!email || password===confirmpassword){
      }
        try{
        
        const newUser=new UserModel({
            name,
            email,
            password:hashPassword,
            confirmpassword:hashPassword,
            pancard,
            phone
        });
        const newAccount=new AccountModel({
            email,
            accountBalance:1000,
            savingBalance:0,
            expenseBalance:0,
            investmentBalance:0,
        });
        await newAccount.save();
        await newUser.save();
        return res.send('Added successfully');
    }
    catch(err){
        console.log(err);
        
    }
}

export const getUser=async(req:Request,res:Response)=>{
    try{
       return res.json(await UserModel.find()); 
    }
    catch(err){
        console.log(err);
        
    }
}