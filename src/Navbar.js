import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >new Blog</Link>
            

            </div>
        </div>
     );
}
 
export default Navbar;