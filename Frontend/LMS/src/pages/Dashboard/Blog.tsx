import Blogs from "../../sections/Blog/Blogs";
import PostBlog from "../../sections/Blog/PostBlog";
import useFetch from "../../Hooks/useFetch";
import Loading from "../../components/Loading";
const Blog = () => {
  const { iserror, isloading, data } = useFetch("/blog")
  if (isloading) {
    return <><Loading /></>
  }
  if (iserror) {
    return <>Something went wrong</>
  }
  type blog = {
    title: string,
    content: string,
    user: {
      _id: string,
      username: string,
    },
    _id: string,
  }
  return (
    <div>
      <PostBlog />
      <div className="my-4 max-h-[500px] w-full overflow-y-scroll">

        {
          data.data.length === 0 && <h5>No blog is Uploaded</h5>
        }
        {
          data.data.length > 0 && data.data.map((item: blog, index: number) => {
            return (<Blogs key={index} title={item.title} content={item.content} user={item.user.username} id={item.user._id} blogid={item._id} />)
          })
        }
      </div>
    </div>
  );
};

export default Blog;
