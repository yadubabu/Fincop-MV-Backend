"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TransactionModel = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    transdate: {
        type: Date,
        required: true
    },
});
exports.default = (0, mongoose_1.model)('TransactionModel', TransactionModel);
