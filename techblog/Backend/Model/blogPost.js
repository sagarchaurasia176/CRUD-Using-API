const mongoose = require("mongoose");
//creation for the schema post
const schemaForPost = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.ObjectId,
      //pass the ref here
      ref: "likeData",
    },
  ],
  Comment: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "CommentData",
    },
  ],
});
//schema for passed the data
module.exports = mongoose.model("schemaforPost", schemaForPost);
