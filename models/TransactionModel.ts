import {Schema,model} from 'mongoose';

interface Trans{
    name:string;
    type:string;
    amount:number;
    transdate:Date;
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
    transdate:{
        type:Date,
        required:true
    },
})

export default model<Trans>('TransactionModel',TransactionModel);