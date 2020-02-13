import mongoose from "mongoose";
import NinjaSchema from "../schemas/ninja.schema";

const Ninja = mongoose.model("ninja", NinjaSchema);

export default Ninja;
