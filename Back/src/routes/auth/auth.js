const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(401).json({ error: "Acceso denegado" });
    try {
      const verified = jwt.verify(token, process.env.SECRET_TOKEN);
      req.user = verified;
      next();
    } catch (e) {
      res.status(400).send({ error: e, message: "invalid token" });
    }
  },
};
