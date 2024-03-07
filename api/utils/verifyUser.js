import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  console.log("Verifying process is called..");

  const token = req.cookies.access_token;

  console.log(`Token data: ${token}`);

  // console.log(`Your Token :${token}`);

  if (!token) {
    console.log("No Token found");
    return next(errorHandler(401, "Unauthorized"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log("Token verification error");
      return next(errorHandler(401, "Unauthorized"));
    }
    console.log(`User data: ${JSON.stringify(user)}`);
    //user is added to the request
    req.user = user;
    // to invoke the second function in the put()
    next();
  });
};
