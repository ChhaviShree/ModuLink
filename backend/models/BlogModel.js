const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    blog_title: {
      type: String,
    },
    blog_description: {
      type: String,
    },
    like_count: {
      type: Number,
      default: 0,
    },
    cover_image: {
      type: String,
    },
    comments: [
      {
        user_id: {
          type: Schema.Types.ObjectId,
        },
        type: {
          type: String,
          enum: ["User", "Vendor"],
        },
        comment: {
          type: String,
        },
      },
    ],
    posters: [
      {
        type: String,
      },
    ],
    liked_by: [
      {
        user_id: {
          type: Schema.Types.ObjectId,
        },
      },
    ],
    author: {
      id: {
        type: Schema.Types.ObjectId,
      },
      type: {
        type: String,
        enum: ["User", "Vendor"],
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
