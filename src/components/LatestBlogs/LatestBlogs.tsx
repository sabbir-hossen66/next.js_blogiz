import LatestBlogCard from "../ui/LatestBlogCard";


const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div>
      <h2 className="text-center text-5xl uppercase">hello latest blogs</h2>
      <div>
        {
          blogs.map(blog => <LatestBlogCard
            key={blog.id}
            blog={blog}
          />)
        }
      </div>
    </div>
  );
};

export default LatestBlogs;