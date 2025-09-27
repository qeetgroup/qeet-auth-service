import chalk from "chalk";
import { app } from "./app.js";

const AUTH_HOST = process.env?.["HOST"] || "localhost";
const AUTH_PORT = Number(process.env?.["PORT"]) || 3001;

app.listen(AUTH_PORT, AUTH_HOST, () => {
  console.log(
    chalk.bold.yellow("⏳ [") +
      chalk.bold.blueBright("QEET-AUTH-SERVICE") +
      chalk.bold.yellow("] ") +
      chalk.bold.green(`running at http://${AUTH_HOST}:${AUTH_PORT}`)
  );
});
