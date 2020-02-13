import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"]
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
  // add geo location
});

export default NinjaSchema;
