import express from "express";
import {
  getUser,
  refresh,
  resetPassword,
  resetPasswordRequest,
  signIn,
  signUp,
  verifyResetPasswordRequest,
} from "../controllers/authentication.js";

const router = express.Router();

router.get("/refresh", refresh);

router.get("/user", getUser);

router.post("/sign-in", signIn);

router.post("/sign-up", signUp);

router.post("/reset-password-request", resetPasswordRequest);

router.get("/verify-reset-password-request", verifyResetPasswordRequest);

router.post("/reset-password", resetPassword);

export default router;
