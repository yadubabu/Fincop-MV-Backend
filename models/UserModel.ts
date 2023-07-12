// import { User } from "../modals/userModal";

import { Schema,model } from "mongoose";
interface User{
    name:string;
    email:string;
    password:string;
    confirmpassword:string;
    pancard:string;
    phone:number;
}
const UserModel=new Schema<User>({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
        required:true,
    },
    pancard:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,  
    }
    

})
export default model<User>('UserModel',UserModel);