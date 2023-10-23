import { Request, Response, Router } from "express";
import client from 'prom-client';
import counter from "../../metrics/counter";

// const prefix = 'node_ws_';
// const collectDefaultMetrics = client.collectDefaultMetrics;

const register = new client.Registry();
register.registerMetric(counter);
// collectDefaultMetrics({ prefix });

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.set("Content-Type", register.contentType);
  return res.send(await register.metrics());
});


export default router;