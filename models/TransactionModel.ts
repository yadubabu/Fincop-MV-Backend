import {Schema,model} from 'mongoose';

interface Trans{
    name:string;
    type:string;
    amount:number;
    date:date;
}

const TransactionModel=new Schema<Trans>({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:Date.now()
    },
})

exports default model<Trans>('TransactionModel',TransactionModel);