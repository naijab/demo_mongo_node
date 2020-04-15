import { Document, Model, model, Schema } from "mongoose";

/**
 * Interface to model the Vehicle Schema for TypeScript.
 * @param vehicle_speed:string
 * @param oil:string
 */
export interface IVehicle extends Document {
  vehicle_speed: string;
  oil: string;
  time: string;
}

const vehicleSchema: Schema = new Schema({
  vehicle_speed: {
    type: String,
    required: true,
  },
  oil:{
    type: String,
    required: true,
  },
  time:{
    type: String,
    required: true,
  },
})

const Vehicle: Model<IVehicle> = model("Data", vehicleSchema, "data");

export default Vehicle;