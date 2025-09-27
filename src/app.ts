import { authRouter } from "@routes/auth.routes.js";
import express, { Express, Request, Response } from "express";

const app: Express = express();

// Middlewares
app.use(express.json());

// Health check
app.get("/health", (_: Request, res: Response) => {
  res.send({
    statusCode: "200",
    service: "QEET AUTH SERVICE",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Routes
app.use("/auth", authRouter);

export { app };
