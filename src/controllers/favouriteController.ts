import { Request, Response } from "express";

export const getFavourites = (req: Request, res: Response) => {
  res.send("Getting favourites");
};

export const addFavourites = (req: Request, res: Response) => {
  res.send("adding favourites");
};

export const UpdateFavourites = (req: Request, res: Response) => {
  res.send("updating favourites");
};

export const deleteFavourites = (req: Request, res: Response) => {
  res.send("delete favourites");
};
