"use strict";
// import { User } from "../modals/userModal";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserModel = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true,
    },
    pancard: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    }
});
exports.default = (0, mongoose_1.model)('UserModel', UserModel);
