import User from "./model.js";
import { generateRefreshToken } from "../auth/controller.js";

export const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    if (user) {
      return res.send({
        data: user,
        status: "success",
      });
    } else {
      throw "Unable to create user";
    }
  } catch (err) {
    console.log(err);
    res.send({
      data: err,
      status: "error",
    });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await User.findOne({ email });
    if (data) {
      const { password: storedPassword } = data;
      if (storedPassword === password) {
        const { pass, ...payload } = data;
        const refreshToken = await generateRefreshToken(payload);
        return res.send({
          data: refreshToken,
          status: "success",
        });
      } else {
        throw "Password doesn't match";
      }
    } else {
      throw "Email doesn't exists";
    }
  } catch (err) {
    res.send({
      data: err,
      status: "error",
    });
  }
};
