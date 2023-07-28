"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const UserModel_1 = __importDefault(require("../models/UserModel"));
const bcrypt = __importStar(require("bcrypt"));
const AccountModel_1 = __importDefault(require("../models/AccountModel"));
const createUser = async (req, res, next) => {
    const { name, email, password, confirmpassword, pancard, phone } = req.body;
    let hashPassword = await bcrypt.hash(password, 12);
    if (!email || password === confirmpassword) {
    }
    try {
        const newUser = new UserModel_1.default({
            name, email,
            password: hashPassword,
            confirmpassword: hashPassword,
            pancard, phone
        });
        const newAccount = new AccountModel_1.default({
            email,
            accountBalance: 1000,
            savingBalance: 0,
            expenseBalance: 0,
            investmentBalance: 0,
        });
        await newAccount.save();
        await newUser.save();
        return res.send('Added successfully');
    }
    catch (err) {
        console.log(err);
    }
};
exports.createUser = createUser;
