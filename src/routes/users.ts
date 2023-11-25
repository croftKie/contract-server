import express from "express";
import * as user from "../controllers/userController";
const userRouter = express.Router();

userRouter.get("/", user.getUser);
userRouter.post("/signup", user.addUser);
userRouter.post("/signin", user.loginUser);
userRouter.put("/", user.updateUser);
userRouter.delete("/", user.deleteUser);

export default userRouter;
