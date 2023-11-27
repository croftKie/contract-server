"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const favouriteController_1 = require("../controllers/favouriteController");
const favouriteRouter = express_1.default.Router();
favouriteRouter.get("/", favouriteController_1.getFavourites);
favouriteRouter.post("/", favouriteController_1.addFavourites);
favouriteRouter.put("/", favouriteController_1.UpdateFavourites);
favouriteRouter.delete("/", favouriteController_1.deleteFavourites);
exports.default = favouriteRouter;
