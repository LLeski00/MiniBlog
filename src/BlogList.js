const BlogList = ({blogs,title,handleDeleteBlog}) => {
    return (
        <div className="blog-list">
            <div className="blog-list-content">
                <h1 className="blog-list-title">{title}</h1> 
                {blogs.map((blog) => (
                    <div className="blog" key={blog.id}>
                        <div className="blog-delete-button-container">
                            <button className="blog-delete-button" onClick={()=>handleDeleteBlog(blog.id)}>X</button>
                        </div>
                        <h2 className="blog-title">{blog.title}</h2>
                        <h4 className="blog-preview">{blog.preview}</h4>
                        <p>Written by: {blog.author}</p>
                    </div>   
                ))}
            </div>
        </div>
    );
}
 
export default BlogList;