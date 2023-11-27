"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.loginUser = exports.addUser = exports.getUser = void 0;
const getUser = (req, res) => {
    res.send("Getting user info");
};
exports.getUser = getUser;
const addUser = (req, res) => {
    res.send("adding new user");
};
exports.addUser = addUser;
const loginUser = (req, res) => {
    res.send("checking login info");
};
exports.loginUser = loginUser;
const updateUser = (req, res) => {
    res.send("updating user information");
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    res.send("Deleting user information");
};
exports.deleteUser = deleteUser;
