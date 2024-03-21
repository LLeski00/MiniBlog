import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id}=useParams();
    const {info:blog,isLoading,error} = useFetch("http://localhost:8000/blogs/"+id);

    return (
        <div className="blog-details">
            <div className="blog-details-content">
                {error && <p className="blog-error">{error}</p>}
                {isLoading && <p className="blog-loading">Loading...</p>}
                {blog &&
                    <div className="blog-details-data">
                        <h1 className="blog-details-title">{blog.title}</h1>
                        <h2 className="blog-details-author">By: {blog.author}</h2>
                        <p className="blog-details-body">{blog.body}</p>
                    </div>
                }
            </div>
        </div>
    );
}
 
export default BlogDetails;