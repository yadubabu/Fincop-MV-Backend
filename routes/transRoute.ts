import TransactionModel from "../models/TransactionModel";
import { Router } from "express";
import { addTrans,getTrans } from "../controllers/transController";


const transRoute=Router();

transRoute.get('/',getTrans);

transRoute.post('/addtrans',addTrans);

export default transRoute;
