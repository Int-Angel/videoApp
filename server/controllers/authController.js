import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const signup = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).send("User created");
  } catch (err) {
    next(err);
  }
};
