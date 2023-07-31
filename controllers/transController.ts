import TransactionModel from '../models/TransactionModel';
import {Request,Response,NextFunction} from 'express';

export const addTrans=async(req:Request,res:Response,next:NextFunction)=>{
    const {name,type,amount,date}=req.body;
           
     
        try{
        
        const newTrans=new TransactionModel({
            name,
            type,
            amount,
            date,
        });
       
        await newTrans.save();
        return res.send('Added successfully');
    }
    catch(err){
        console.log(err);
        
    }
}