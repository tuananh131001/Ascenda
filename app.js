
const express = require("express");
const offerRouter = require("./routes/offerRouter.js");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", offerRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
