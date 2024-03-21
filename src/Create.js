import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [author,setAuthor] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleBlogSubmit = (e) => {
        e.preventDefault();
        const preview = body.slice(0,30)+"...";
        const blogContent = {title,preview,body,author};

        setIsLoading(true);

        fetch("http://localhost:8000/blogs",{
            method:'POST',
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify(blogContent)
        })
        .then(()=>{
            setIsLoading(false);
        })

        navigate("/");
    }

    return (
        <div className="create">
            <div className="create-content">
                <h1>Add a new blog:</h1>

                <form onSubmit={handleBlogSubmit}>
                    <label>Blog title:</label>
                    <input 
                        type="text" 
                        required 
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}/>
                    <label>Blog body:</label>
                    <textarea 
                        required 
                        value={body}
                        onChange={(e)=>setBody(e.target.value)}></textarea>
                    <label>Blog author:</label>
                    <input 
                        type="text" 
                        required 
                        value={author}
                        onChange={(e)=>setAuthor(e.target.value)}/>
                    {!isLoading && <button>Add blog</button>}
                    {isLoading && <button disabled>Adding...</button>}
                </form>
            </div>
        </div>
    );
}
 
export default Create;