import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id}=useParams();
    const {info:blog,isLoading,error} = useFetch("http://localhost:8000/blogs/"+id);

    return (
        <div className="blog-details">
            <div className="blog-details-content">
                <h1>Blog No.{id} details: </h1>
                {error && <p className="blog-error">{error}</p>}
                {isLoading && <p className="blog-loading">Loading...</p>}
                {blog &&
                    <div className="blog-details-data">
                        <p className="blog-details-body">{blog.body}</p>
                        <p className="blog-details-author">Written by: {blog.author}</p>
                    </div>
                }
            </div>
        </div>
    );
}
 
export default BlogDetails;