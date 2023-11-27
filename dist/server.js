"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const jobs_1 = __importDefault(require("./routes/jobs"));
const favourites_1 = __importDefault(require("./routes/favourites"));
const users_1 = __importDefault(require("./routes/users"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const db_1 = require("./database/db");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 6001;
app.use((0, express_session_1.default)({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: connect_mongo_1.default.create({
        mongoUrl: process.env.MONGODB_URI,
    }),
    cookie: { maxAge: 36000000 },
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
(0, db_1.connectDB)();
app.use("/jobs", jobs_1.default);
app.use("/favourites", favourites_1.default);
app.use("/user", users_1.default);
app.listen(PORT, () => {
    console.log("server listening");
});
module.exports = app;
