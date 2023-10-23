import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import api from "./routes/";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use("/api", api);

const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port} :)`);
});

// Gestisci il segnale SIGINT
process.on('SIGINT', () => {
  console.log('Received SIGINT. Closing server gracefully...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});
