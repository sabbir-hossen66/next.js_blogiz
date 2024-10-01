import BlogCard from "../ui/BlogCard";
import LatestBlogCard from "../ui/LatestBlogCard";


const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-center text-5xl uppercase">hello latest blogs</h2>
      <div className="grid grid-cols-1 gap-4  lg:grid-cols-2 lg:gap-3">
        {
          blogs.slice(0, 2).map(blog => <LatestBlogCard
            key={blog.id}
            blog={blog}
          />)
        }
      </div>
      <div className="grid grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-3 mx-auto">
        {
          blogs.slice(2, 5).map(blog => <BlogCard
            key={blog.id}
            blog={blog}
          />)
        }
      </div>
    </div>
  );
};

export default LatestBlogs;