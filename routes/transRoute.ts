import TransactionModel from "../models/TransactionModel";
import { Router } from "express";
import { addTrans } from "../controllers/transController";


const transRoute=Router();

transRoute.post('/addtrans',addTrans);

export default transRoute;