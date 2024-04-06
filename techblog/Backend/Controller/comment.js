const CommentData = require("../Model/Comment");
const postReq = require("../Model/blogPost");
// exports the data first
exports.comment = async (req, res) => {
  try {
    const { post, users, description } = req.body;
    // save the data to the db
    const commentss = await CommentData.create({ post, users, description });
    //now pass the data to update its => it is bacially wrapped to the file okay
    const updateData = await postReq.findByIdAndUpdate(post,{ $push: { Comment: commentss._id } },
      { new: true }
    ).populate("Comment").exec();  
      //response of the send
      res.status(200).json({
      success: true,
      message: "data is passed to db from the comment page",
      data: updateData,
  });
}
    catch (er) {
    console.log("error in post controller");
    res.status(500).json({
      success: false,
      message: "data is not passed to db check comment page",
      error: er.message,
    });
  }
};

