const Blog = ({blog}) => (
  <div>
    {blog.title} {blog.author}
    {blog.url} Likes {blog.likes}
  </div>  
)

export default Blog



