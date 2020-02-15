import { Router } from "express";
import NinjaController from "../controllers/ninja.controller";

const router = Router();

router.get("/ninjas", NinjaController.getAll);

router.post("/ninjas", NinjaController.create);

router.get("/ninjas/available", NinjaController.getAvailable);

router.get("/ninjas/:id", NinjaController.getOne);

router.put("/ninjas/:id", NinjaController.update);

router.delete("/ninjas/:id", NinjaController.delete);

export default router;
