const express = require("express");
const {
  createBlog,
  likeBlog,
  getBlogs,
  addComment,
  getComments,
  deleteBlog,
} = require("../controllers/BlogController");
const blogRouter = express.Router();
const auth = require("../auth/auth");

blogRouter.post("/create", auth, createBlog);
blogRouter.put("/like/:blogId", auth, likeBlog);
blogRouter.get("/allblogs", auth, getBlogs);
blogRouter.put("/comment/:blogId", auth, addComment);
blogRouter.get("/getcomments/:blogId", auth, getComments);
blogRouter.delete("/delete/:blogId", auth, deleteBlog);

module.exports = blogRouter;
