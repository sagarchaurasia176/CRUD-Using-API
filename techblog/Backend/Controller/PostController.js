const schemaforPost = require("../Model/blogPost");
exports.PostController = async (req, res) => {
  try {
    const { title, body, likes, Comment } = req.body;
    const postSnd = await schemaforPost.create({ title, body, likes, Comment });
    //update the data here
    // response the data from th db
    res.status(200).json({
      success: true,
      message: "data is passed to db",
      data: postSnd,
    });
  } catch (er) {
    console.log("error in post controller");
    res.status(500).json({
      success: false,
      message: "data is not passed to db check post controller",
      error: er.message,
    });
  }
};

// get controller 
exports.getController = async (req, res) => {
    try {
      //pass the data
      const fetchPostData = await 
      schemaforPost.find();
      // ==================
      // response the data from the json
      res.status(200).json({
        success: true,
        data: fetchPostData,
        message: "fetch the data from the db",
      });
    } 
      catch (er) {
      console.log("error");
       res.status(500).json({
        success: false,
        message: "data is not be fetch from the db",
        data: er.message,
      });
    }
  };