import { Request, Response, Router } from "express";
import counter from "../../metrics/counter";

const router = Router();

router.get("/inc", async (req: Request, res: Response) => {
  counter.inc();
  res.send(await counter.get());
});


export default router;