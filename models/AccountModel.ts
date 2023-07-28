import {Schema,model,Document} from 'mongoose';

interface Account extends Document{
    email:string,
    accountBalance:number,
    savingBalance:number,
    expenseBalance:number,
    investmentBalance:number,

}

const AccountModel=new Schema<Account>({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    accountBalance:{
        type:Number,
        required:true,
    },
    savingBalance:{
        type:Number,
        required:true,
    },
    expenseBalance:{
        type:Number,
        required:true,
    },
    investmentBalance:{
        type:Number,
        required:true,
    }
    
});

export default model<Account>('AccountModel',AccountModel);