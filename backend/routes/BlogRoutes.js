const express = require("express");
const {
  createBlog,
  likeBlog,
  getBlogs,
  addComment,
  getComments,
  deleteBlog,
  getParticularBlog,
} = require("../controllers/BlogController");
const blogRouter = express.Router();
const auth = require("../auth/auth");

blogRouter.post("/create", auth, createBlog);
blogRouter.put("/like/:blogId", auth, likeBlog);
blogRouter.get("/allblogs", auth, getBlogs);
blogRouter.put("/comment/:blogId", auth, addComment);
blogRouter.get("/getcomments/:blogId", auth, getComments);
blogRouter.delete("/delete/:blogId", auth, deleteBlog);
blogRouter.get("/getblog/:blogId", auth, getParticularBlog);

module.exports = blogRouter;
