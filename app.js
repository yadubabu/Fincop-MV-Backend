"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dbConnect_1 = require("./dbConnect");
var mongoose_1 = require("mongoose");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', function (req, res) {
    res.send('Hello World');
});
mongoose_1.default.connect(dbConnect_1.connect).then(function () {
    console.log('DB Connected');
});
app.listen(5000, function () {
    console.log('Server is Running on 5000');
});
