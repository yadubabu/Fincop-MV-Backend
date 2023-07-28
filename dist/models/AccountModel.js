"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AccountModel = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    accountBalance: {
        type: Number,
        required: true,
    },
    savingBalance: {
        type: Number,
        required: true,
    },
    expenseBalance: {
        type: Number,
        required: true,
    },
    investmentBalance: {
        type: Number,
        required: true,
    }
});
exports.default = (0, mongoose_1.model)('AccountModel', AccountModel);
