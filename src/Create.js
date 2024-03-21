import { useState } from "react";

const Create = () => {

    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [author,setAuthor] = useState("");

    const handleBlogSubmit = (e) => {
        e.preventDefault();
        const preview = body.slice(0,20)+"...";
        const blogContent = {title,preview,body,author};
        console.log(blogContent);
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
                    <button>Add blog</button>
                </form>
            </div>
        </div>
    );
}
 
export default Create;