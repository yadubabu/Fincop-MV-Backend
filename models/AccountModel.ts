import {Schema,model,Document} from 'mongoose';

interface Account extends Document{
    email:string,
    totalAccBalance:number,
    totalSavings:number,
    totalExpense:number,
    totalInvestment:number,

}

const AccountModel=new Schema<Account>({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    totalAccBalance:{
        type:Number,
        required:true,
    },
    totalSavings:{
        type:Number,
        required:true,
    },
    totalExpense:{
        type:Number,
        required:true,
    },
    totalInvestment:{
        type:Number,
        required:true,
    }
    
});

export default model<Account>('AccountModel',AccountModel);
