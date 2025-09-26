import express, { Request, Response } from "express";
import chalk from "chalk";

const app = express();

const AUTH_HOST = process.env?.["HOST"] || "localhost";
const AUTH_PORT = Number(process.env?.["PORT"]) || 3001;

// Health check
app.get("/health", (_: Request, res: Response) => {
  res.send({
    statusCode: "200",
    service: "QEET AUTH SERVICE",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.listen(AUTH_PORT, AUTH_HOST, () => {
  console.log(
    chalk.bold.yellow("⏳ [") +
      chalk.bold.blueBright("QEET-AUTH-SERVICE") +
      chalk.bold.yellow("] ") +
      chalk.bold.green(`running at http://${AUTH_HOST}:${AUTH_PORT}`)
  );
});
