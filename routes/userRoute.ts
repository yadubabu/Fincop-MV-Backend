import express from 'express';
import { Request,Response } from 'express';
import { createUser } from '../controllers/userController';
import { getUser } from '../controllers/userController';
import UserModel from "../models/UserModel";
import * as bcrypt from 'bcrypt';
import AccountModel from '../models/AccountModel';

const router=express.Router();

router.get('/getuser',getUser);

router.post('/login',async(req:Request,res:Response)=>{
    const {email,pass}=req.body;
    console.log(email,pass);
    
})

router.post('/',async(req:Request,res:Response)=>{
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
);


export default router;