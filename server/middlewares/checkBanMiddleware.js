const jwt = require("jsonwebtoken");
const { Ban } = require("../models/models");

module.exports = async function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Not authorized" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    await Ban.count({
      where: { userId: decoded.id },
    }).then(async (count) => {
      if (count !== 0) {
        return res
          .status(403)
          .json({
            message:
              "No access because you were banned for violating community guidelines",
          });
      }
      next();
    });
  } catch (e) {
    res.status(401).json({ message: "Not authorized" });
  }
};
