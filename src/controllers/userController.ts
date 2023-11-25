import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
  res.send("Getting user info");
};
export const addUser = (req: Request, res: Response) => {
  res.send("adding new user");
};
export const loginUser = (req: Request, res: Response) => {
  res.send("checking login info");
};
export const updateUser = (req: Request, res: Response) => {
  res.send("updating user information");
};
export const deleteUser = (req: Request, res: Response) => {
  res.send("Deleting user information");
};
