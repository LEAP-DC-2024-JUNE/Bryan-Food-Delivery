import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

const generateToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const refresh = async (request, response) => {
  try {
    response.json({
      succes: true,
      message: "Hello (Authentication)",
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const signIn = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email }).select("+password");
    const isValid = bcrypt.compareSync(password, user.password);
    if (isValid) {
      const token = generateToken();
      response.json({
        succes: true,
        token,
      });
    } else {
      response.status(400).json({
        success: false,
        message: "Authentication failed.",
      });
    }
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const signUp = async (request, response) => {
  try {
    const { password } = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      ...request.body,
      password: hashedPassword,
    });

    const token = generateToken(user._id, user.email);

    response.json({
      succes: true,
      user,
      token,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetPasswordRequest = async (request, response) => {
  try {
    response.json({
      succes: true,
      message: "Hello (Authentication)",
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyResetPasswordRequest = async (request, response) => {
  try {
    response.json({
      succes: true,
      message: "Hello (Authentication)",
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetPassword = async (request, response) => {
  try {
    response.json({
      succes: true,
      message: "Hello (Authentication)",
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
