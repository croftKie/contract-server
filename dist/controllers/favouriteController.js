"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFavourites = exports.UpdateFavourites = exports.addFavourites = exports.getFavourites = void 0;
const getFavourites = (req, res) => {
    res.send("Getting favourites");
};
exports.getFavourites = getFavourites;
const addFavourites = (req, res) => {
    res.send("adding favourites");
};
exports.addFavourites = addFavourites;
const UpdateFavourites = (req, res) => {
    res.send("updating favourites");
};
exports.UpdateFavourites = UpdateFavourites;
const deleteFavourites = (req, res) => {
    res.send("delete favourites");
};
exports.deleteFavourites = deleteFavourites;
