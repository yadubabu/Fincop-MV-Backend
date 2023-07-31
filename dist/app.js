"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dbConnect_1 = require("./dbConnect");
const mongoose_1 = __importDefault(require("mongoose"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const transRoute_1 = __importDefault(require("./routes/transRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World!!!!');
});
mongoose_1.default.connect(dbConnect_1.connect).then(() => {
    console.log('DB Connected');
});
app.use('/user', userRoute_1.default);
app.use('/user/adduser', userRoute_1.default);
app.use('/user', userRoute_1.default);
app.use('/api', transRoute_1.default);
app.listen(5000, () => {
    console.log('Server is Running on 5000');
});
