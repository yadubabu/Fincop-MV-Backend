"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transController_1 = require("../controllers/transController");
const transRoute = (0, express_1.Router)();
transRoute.post('/addtrans', transController_1.addTrans);
exports.default = transRoute;
