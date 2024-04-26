const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = user.id;
      console.log("jwt", user);
    } else {
      res.status(401).json({ message: "No token" });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized User" });
  }
};
module.exports = auth;
