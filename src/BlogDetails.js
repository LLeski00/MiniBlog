import { useParams } from "react-router-dom";

const BlogDetails = () => {

    const {id}=useParams();

    return (
        <div className="blog-details">
            <div className="blog-details-content">
                <h1>Blog No.{id} details: </h1>
            </div>
        </div>
    );
}
 
export default BlogDetails;