import express from "express";
import {
  getFavourites,
  addFavourites,
  UpdateFavourites,
  deleteFavourites,
} from "../controllers/favouriteController";
const favouriteRouter = express.Router();

favouriteRouter.get("/", getFavourites);
favouriteRouter.post("/", addFavourites);
favouriteRouter.put("/", UpdateFavourites);
favouriteRouter.delete("/", deleteFavourites);

export default favouriteRouter;
