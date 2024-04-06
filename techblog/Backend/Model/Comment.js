const mongoose = require("mongoose");
//creation for the schema post
const schemaForComments = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "schemaforPost",
  },
  users: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
});

//schema for passed the data
module.exports = mongoose.model("CommentData", schemaForComments);
