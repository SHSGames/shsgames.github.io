import chalk from "chalk";

// Add methods to console.
console.info = (...args): unknown => console.log(chalk.blue("[ INFO ]"), ...args);
console.error = (...args): unknown => console.log(chalk.red("[ ERROR ]"), ...args);
console.warn = (...args): unknown => console.log(chalk.yellow("[ WARN ]"), ...args);

// Log errors to console instead of killing the application.
process.on("uncaughtException", err => console.error(err));
