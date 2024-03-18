import { useState } from "react";

const Home = () => {

    const [blogs,setBlogs] = useState([
        {title:"First blog", body:"This is the first blog...", author:"Luka", id:0},
        {title:"Austria trip", body:"We set off on thursday with...", author:"Luka", id:1},
        {title:"Tennis", body:"The most amazing tennis court I have...", author:"Luka", id:2}
    ]);

    return (
        <div className="home">
            <div className="homeContent">
                {blogs.map((blog) => (
                    <div className="blog" key={blog.id}>
                        <h2 className="blogTitle">{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                    </div>   
                ))}
            </div>
        </div>
    );
}
 
export default Home;