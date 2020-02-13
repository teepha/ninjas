import express from 'express';

const app = express();
const port = process.env.port || 4040;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
