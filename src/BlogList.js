const BlogList = ({blogs}) => {
    return (
        <div className="blog-list">
            <div className="blog-list-content">
                {blogs.map((blog) => (
                    <div className="blog" key={blog.id}>
                        <h2 className="blogTitle">{blog.title}</h2>
                        <h4 className="blogPreview">{blog.preview}</h4>
                        <p>Written by: {blog.author}</p>
                    </div>   
                ))}
            </div>
        </div>
    );
}
 
export default BlogList;