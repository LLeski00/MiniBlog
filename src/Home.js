import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {info:blogs,isLoading, error} = useFetch("http://localhost:8000/blogs");
    
    return (
        <div className="home">
            <div className="home-content">
                {error && <p className="blog-error">{error}</p>}
                {isLoading && <p className="blog-loading">Loading...</p>}
                {blogs && <BlogList blogs={blogs} title="All blogs:"/>}
            </div>
        </div>
    );
}
 
export default Home;