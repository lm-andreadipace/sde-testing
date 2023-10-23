import { Router } from "express";
import routes from "./routers";

const router = Router();

router.use("/metrics", routes.metrics);
router.use("/actions", routes.actions)

export default router;