const jwt = require("jsonwebtoken");
const store = require("store");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "User is not authorized" });
    }
    jwt.verify(token, process.env.SECRET_KEY, function (err) {
      if (err) {
        console.log(err)
        store.remove("token");
      } else {
        next();
      }
    });
  } catch (e) {
    res.status(401).json({ message: "User is not authorized" });
  }
};
