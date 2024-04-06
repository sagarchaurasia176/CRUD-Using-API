const mongoose = require("mongoose");
//creation for the schema post

const schemaForLike = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "schemaforPost",
  },
  user: {
    type: String,
    require: true,
  },
});

//schema for passed the data
module.exports = mongoose.model("likeData", schemaForLike);
