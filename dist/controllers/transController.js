"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTrans = void 0;
const TransactionModel_1 = __importDefault(require("../models/TransactionModel"));
const addTrans = async (req, res, next) => {
    const { name, type, amount, date } = req.body;
    try {
        const newTrans = new TransactionModel_1.default({
            name,
            type,
            amount,
            date,
        });
        await newTrans.save();
        return res.send('Added successfully');
    }
    catch (err) {
        console.log(err);
    }
};
exports.addTrans = addTrans;
