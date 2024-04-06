const express = require("express");
const app = express();
require("dotenv").config();

//middleware
app.use(express.json());
//routes
const routerImp = require("./Routes/HandlerRoutes");
app.use("/api/data", routerImp);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server start....");
});
app.get("/", (req, res) => {
  res.send("server start");
});
//mongo db
const dbConnect = require("./config/db");
dbConnect();
