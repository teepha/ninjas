import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = process.env.port || 4040;

mongoose.connect("mongodb://localhost/ninjago", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
