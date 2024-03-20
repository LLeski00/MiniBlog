import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs,setBlogs] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    const handleDeleteBlog = (id) => {
        const newBlogs=blogs.filter((blog)=>blog.id!==id)
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        fetch("http://localhost:8000/blogs")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
            setIsLoading(false);
        })
    },[]);

    return (
        <div className="home">
            <div className="home-content">
                {isLoading && <p className="blog-loading">Loading...</p>}
                {blogs && <BlogList blogs={blogs} title="All blogs:" handleDeleteBlog={handleDeleteBlog}/>}
            </div>
        </div>
    );
}
 
export default Home;