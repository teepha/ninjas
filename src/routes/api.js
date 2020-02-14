import { Router } from "express";
import NinjaController from "../controllers/ninja.controller";

const router = Router();

router.get("/ninjas", (req, res) => {
  res.send({ message: "Return Ninjas here!" });
});

router.post("/ninjas", NinjaController.create);

router.get("/ninjas/:id", (req, res) => {
  res.send({ message: "Retrieve a Ninja here!" });
});

router.put("/ninjas/:id", (req, res) => {
  res.send({ message: "Update Ninja details here!" });
});

router.delete("/ninjas/:id", NinjaController.delete);

export default router;
