import express from "express";
import offerRouter from "./routes/offerRouter.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", offerRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
