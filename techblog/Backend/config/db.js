const mongoose = require("mongoose");
require("dotenv").config();

//create one () for the db conenection
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      //two flags
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("db connected succesfully");
    })
    .catch(() => {
      console.log("error in db connections");
    });
};
module.exports = dbConnect;
