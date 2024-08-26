require("dotenv").config();
const { verify } = require("jsonwebtoken");

const middleware = (req, res, next) => {
  try {
    const { auth } = req.cookies;
    if (auth === "undefined") {
      return res.send({ error: "unauthorized" });
    }
    verify(auth, process.env.SECRET, () => {
      if (error) {
        return res.send({ error: "forbidden" });
      }
      req.user = data;
      next();
    });
  } catch (error) {
    console.error(error);
    return res.send({
      error: error,
    });
  }
};

module.exports = middleware;
