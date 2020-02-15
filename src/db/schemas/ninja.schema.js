import mongoose from "mongoose";
import GeoSchema from "./geolocation.schema";

const Schema = mongoose.Schema;

const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required!"]
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
});

export default NinjaSchema;
