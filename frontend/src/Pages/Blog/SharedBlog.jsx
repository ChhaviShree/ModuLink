import LoggedInNavbar from "../../Components/LoggedInNavbar/LoggedInNavbar";
import BlogTitle from "./BlogTitle";
import SharedBlogCard from "./SharedBlogCard";

const SharedBlog = () => {
  return (
    <>
      <LoggedInNavbar />
      <BlogTitle />
      <SharedBlogCard />
    </>
  );
};

export default SharedBlog;
