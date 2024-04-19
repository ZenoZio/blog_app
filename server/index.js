import express from "express";
const router = express.Router();

const app = express();

app.listen(3000, () => {
  console.log("server in running on port 3000");
});
