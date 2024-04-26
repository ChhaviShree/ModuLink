import LoggedInNavbar from "../../Components/LoggedInNavbar/LoggedInNavbar";
import BlogCard from "./BlogCard";
import BlogTitle from "./BlogTitle";

const Blog = () => {
  return (
    <>
      <LoggedInNavbar />
      <BlogTitle />
      <BlogCard />
    </>
  );
};
export default Blog;
