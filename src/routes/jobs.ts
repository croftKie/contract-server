import express from "express";
import { getJobs } from "../controllers/jobController";
const jobRouter = express.Router();

jobRouter.get("/", getJobs);

export default jobRouter;
