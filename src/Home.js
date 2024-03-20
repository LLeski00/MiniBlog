import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs,setBlogs] = useState(null);

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
        })
    },[]);

    return (
        <div className="home">
            <div className="home-content">
                {blogs && <BlogList blogs={blogs} title="All blogs:" handleDeleteBlog={handleDeleteBlog}/>}
            </div>
        </div>
    );
}
 
export default Home;