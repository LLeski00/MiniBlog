import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <Link className="home-button" to="/">Mini blog</Link>
                <Link className="new-blog-button" to="/create">New blog</Link>
            </div>
        </div>
    );
}
 
export default Navbar;