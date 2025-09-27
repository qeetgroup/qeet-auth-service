import { Request, Response } from "express";
// import { authService } from "@services/auth.service.js";

class AuthController {
  register = async (req: Request, res: Response) => {
    const { name } = req.body;
    console.log(name);
    res.json({ name });
  };

  login = async (_: Request, res: Response) => {
    try {
      // TODO: Implement login logic
      res.json({ message: "Login endpoint - not implemented yet" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
}

export const authController = new AuthController();
