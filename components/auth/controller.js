import jwt from "jsonwebtoken";

export const generateRefreshToken = (payload) => {
  let token = jwt.sign(payload, "secret", { expiresIn: "7d" });
  return token;
};

const verifyToken = (token) => {
  if (token) {
    try {
      const payload = jwt.verify(token, "secret");
      return payload;
    } catch (err) {
      throw "Invalid Token";
    }
  }
};

export const generateAccessToken = (req, res) => {
  const { refreshToken } = req.body;
  try {
    const payload = verifyToken(refreshToken);
    const { username, email } = payload;
    if (payload) {
      const accessToken = jwt.sign({ username, email }, "secret", {
        expiresIn: "15m",
      });
      res.send(accessToken);
    }
  } catch (err) {
    res.send("err");
  }
};
