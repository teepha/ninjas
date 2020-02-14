import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes/api";

const app = express();
const port = process.env.port || 4040;

mongoose.connect("mongodb://localhost/ninjago", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use("/api", routes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ error: err.message });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
