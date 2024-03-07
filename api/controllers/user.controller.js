import { errorHandler } from "../utils/error.js";

import User from "../models/user.model.js";

// Sign-Out Function

export const signout = (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("User has been signed out!");
  } catch (error) {
    next(error);
  }
};
