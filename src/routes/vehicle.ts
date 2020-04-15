import { Request, Response, Router } from "express";
import { OK, BAD_GATEWAY, CREATED } from "http-status-codes";
import Vehicle from "../model/vehicle_model";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await Vehicle.find({});
    res.status(OK).json({ data: result });
  } catch (error) {
    res.status(BAD_GATEWAY).json({ message: "Cannot Find Vehicle" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const result = await Vehicle.create({
      vehicle_speed: req.body.vehicle_speed,
      oil: req.body.oil,
      time: req.body.time,
    });
    res.status(CREATED).json({ data: result });
  } catch (error) {
    console.log(error)
    res.status(BAD_GATEWAY).json({ message: "Cannot Create Vehicle" });
  }
});

export default router;
