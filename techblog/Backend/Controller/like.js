const likeData = require("../Model/likes");
const schemaforPost = require("../Model/blogPost");
// exports the data first
exports.like = async (req, res) => {
  try {
    const { post, user } = req.body;
    const likeStor = await likeData.create({ post, user });
    //update that data
    const updateLike = await schemaforPost
      .findByIdAndUpdate(
        post,
        { $push: { likes: likeStor._id } },
        { new: true } //this is the flag which tells about the conditions is true
      )
      .populate("likes")
      .exec(); // response status
      
      res.status(200).json({
      success: true,
      message: "data is passed to db from the like page",
      data: updateLike,
    });
  } catch (er) {
    console.log("error in post controller");
    res.status(500).json({
      success: false,
      message: "data is not passed to db check like page",
      error: er.message,
    });
  }
};
// =================================================//
exports.likeUnlike = async (req, res) => {
  try {
    const { post, likes } = req.body;
    //update that data
    const likeStor = await schemaforPost
      .findOneAndDelete({ post: post, _id:likes })
      .populate("likes")
      .exec();
    //next things is that her
    const upPost = schemaforPost
    .findByIdAndUpdate(post, {$pull:{likes:likeStor._id}},{ new: true })
      .populate("likes")
      .exec();
    // response data here passed
    res.status(200).json({
      success: true,
      message: "data is passed to db from the like page",
      data: upPost,
    });
  } catch (er) {
    console.log("error in post controller");
    res.status(500).json({
      success: false,
      message: "data is not passed to db check like page",
      error: er.message,
    });
  }
};
