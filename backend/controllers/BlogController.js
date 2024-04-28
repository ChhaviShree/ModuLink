const BlogModel = require("../models/BlogModel");
const CustomerModel = require("../models/CustomerModel");
const VendorModel = require("../models/vendorModel");
const createBlog = async (req, res) => {
  console.log("test", req.userId);
  try {
    const { blog_title, blog_description, cover_image, posters, authorType } =
      req.body;
    const blog = await BlogModel.create({
      blog_title,
      blog_description,
      cover_image,
      posters,
      author: { id: req.userId, type: authorType },
      like_count: 0,
    });
    res.status(201).json({ blog });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getBlogs = async (req, res) => {
  const userId = req.userId;
  try {
    const blogs = await BlogModel.find().populate({
      path: "author.id",
    });
    let blogsWithDetails = [];
    for (let i = 0; i < blogs.length; i++) {
      const authorType = blogs[i].author.type;
      // this logged in user has posted this blog
      let posted = false;
      if (blogs[i].author.id.toString() === userId) {
        posted = true;
      }
      let userDetails;
      if (authorType === "Vendor") {
        userDetails = await VendorModel.findById(blogs[i].author.id._id);
      } else if (authorType === "User") {
        const temp = await CustomerModel.findById(blogs[i].author.id._id);
        console.log(temp);
        userDetails = {
          name: temp.name,
          photo: temp.photo,
        };
      }
      const isLikedByUser = blogs[i].liked_by.some(
        (likedBy) => likedBy.user_id.toString() === userId
      );
      const blogWithDetails = {
        blog: blogs[i],
        details: userDetails,
        likedByUser: isLikedByUser,
        posted: posted,
      };

      blogsWithDetails.push(blogWithDetails);
    }

    res.status(200).json({ blogsWithDetails });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const likeBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const userId = req.userId;
    const blog = await BlogModel.findById(blogId);
    const likedByUser = blog.liked_by.find(
      (like) => like.user_id.toString() === userId.toString()
    );
    if (likedByUser) {
      blog.like_count -= 1;
      blog.liked_by = blog.liked_by.filter(
        (like) => like.user_id.toString() !== userId.toString()
      );
      await blog.save();
      return res.status(200).json({ blog, message: "unliked" });
    }
    blog.like_count += 1;
    blog.liked_by.push({ user_id: userId });
    await blog.save();
    res.status(200).json({ blog, message: "liked" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const addComment = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { comment, type } = req.body;
    const userId = req.userId;
    const blog = await BlogModel.findById(blogId);
    blog.comments.push({ user_id: userId, comment, type: type });
    await blog.save();
    res.status(200).json({ blog, message: "comment added" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const getComments = async (req, res) => {
  console.log("get comments");
  try {
    const { blogId } = req.params;
    const blog = await BlogModel.findById(blogId).populate({
      path: "comments.user_id",
    });

    let commentsWithDetails = [];

    for (let i = 0; i < blog.comments.length; i++) {
      const authorType = blog.comments[i].type;
      let userDetails;
      if (authorType === "Vendor") {
        userDetails = await VendorModel.findById(blog.comments[i].user_id);
      } else if (authorType === "User") {
        userDetails = await CustomerModel.findById(blog.comments[i].user_id);
      }

      const commentWithDetails = {
        comment: blog.comments[i].comment,
        authorDetails: userDetails,
      };

      commentsWithDetails.push(commentWithDetails);
    }

    res.status(200).json({ comments: commentsWithDetails });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// delete the blog
const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const userId = req.userId;
    const blog = await BlogModel.findById(blogId);
    if (blog.author.id.toString() !== userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    await BlogModel.findByIdAndDelete(blogId);
    res.status(200).json({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  createBlog,
  likeBlog,
  getBlogs,
  addComment,
  getComments,
  deleteBlog,
};
