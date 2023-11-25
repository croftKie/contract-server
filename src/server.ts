import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import jobRouter from "./routes/jobs";
import favouriteRouter from "./routes/favourites";
import userRouter from "./routes/users";
import session from "express-session";
import MongoStore from "connect-mongo";
import { connectDB } from "./database/db";

dotenv.config();
const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
    cookie: { maxAge: 36000000 },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use("/jobs", jobRouter);
app.use("/favourites", favouriteRouter);
app.use("/user", userRouter);

app.listen("6001", () => {
  console.log("server listening");
});

module.exports = app;
