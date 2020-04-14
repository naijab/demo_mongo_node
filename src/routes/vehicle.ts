import { Request, Response, Router } from "express";
import { OK, BAD_GATEWAY } from "http-status-codes";
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

export default router;
