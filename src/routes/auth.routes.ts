import { authController } from "@controllers/auth.controller.js";
import { Router } from "express";

const authRouter: Router = Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

export { authRouter };
