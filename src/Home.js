import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs,setBlogs] = useState([
        {title:"First blog", preview:"This is the first blog...", author:"Luka", id:0},
        {title:"Austria trip", preview:"We set off on thursday with...", author:"Luka", id:1},
        {title:"Tennis", preview:"The most amazing tennis court I have...", author:"Luka", id:2}
    ]);

    return (
        <div className="home">
            <div className="homeContent">
                <BlogList blogs={blogs}/>
            </div>
        </div>
    );
}
 
export default Home;