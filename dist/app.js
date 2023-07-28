"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnect_1 = require("./dbConnect");
const mongoose_1 = __importDefault(require("mongoose"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!!!!');
});
mongoose_1.default.connect(dbConnect_1.connect).then(() => {
    console.log('DB Connected');
});
app.use('/adduser', userRoute_1.default);
app.listen(5000, () => {
    console.log('Server is Running on 5000');
});
