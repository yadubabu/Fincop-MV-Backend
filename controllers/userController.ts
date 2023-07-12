import UserModel from "../models/UserModel";
import {Request,Response,NextFunction} from 'express';
import {User} from '../modals/userModal';

export const createUser=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const newUser=new UserModel<User>({
            name:'mohini',
            email:'mohini@gmail.com',
            password:'1234',
            confirmpassword:'1234',
            pancard:'SDGSGSDGSD',
            phone:457575687,
        })
        await newUser.save();
        return res.send('Added successfully');
    }
    catch(err){
        console.log(err);
        
    }
}