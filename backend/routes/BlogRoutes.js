const express = require("express");
const {
  createBlog,
  likeBlog,
  getBlogs,
  addComment,
  getComments,
} = require("../controllers/BlogController");
const blogRouter = express.Router();
const auth = require("../auth/auth");

blogRouter.post("/create", auth, createBlog);
blogRouter.put("/like/:blogId", auth, likeBlog);
blogRouter.get("/allblogs", auth, getBlogs);
blogRouter.put("/comment/:blogId", auth, addComment);
blogRouter.get("/getcomments/:blogId", auth, getComments);

module.exports = blogRouter;
