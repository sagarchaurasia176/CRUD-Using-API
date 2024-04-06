const express = require("express");
const router = express.Router();
const {
    PostController,
    getController,
} = require("../Controller/PostController");

// const { getController } = require("../Controller/getController");
const { comment } = require("../Controller/comment");
const { like , likeUnlike} = require("../Controller/like");
// =================================//
router.post("/blog/data", PostController);
router.get("/fetch/data", getController);

// router.get("/comment/fetch", getComments);
router.post("/comment/add", comment);

//like req
router.post("/like/data", like);
router.post("/like/datas", likeUnlike);

// MODULE EXPORTS
module.exports = router;
