import TransactionModel from '../models/TransactionModel';
import {Request,Response,NextFunction} from 'express';
import AccountModel from '../models/AccountModel';
export const addTrans=async(req:Request,res:Response,next:NextFunction)=>{
    const {name,type,amount,transdate}=req.body;
           
     
        try{
        
        const newTrans=new TransactionModel({
            name,
            type,
            amount,
            transdate,
        });
       
        await newTrans.save();
        const getTotals = await AccountModel.find();

   

        return res.send('New Transaction is added successfully');
    }
    catch(err){
        console.log(err);
        
    }
}

export const getTrans=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        return res.json(await TransactionModel.find())
    }
    catch(err){
        console.log(err);
        
    }
}