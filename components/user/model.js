import mongoose from "mongoose";

const validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [36, "Name must be less than 36 characters long"],
  },
  username: {
    type: String,
    required: true,
    trim: true,
    index: { unique: true },
    maxlength: [12, "Username must be less than 12 characters long"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    maxlength: [36, "Password must be less than 36 characters long"],
  },
  age: {
    type: Number,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
    trim: true,
    maxlength: [14, "Phone Number must be less than 14 characters long"],
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", UserSchema, "users");
