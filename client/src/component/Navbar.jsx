
import { Link } from "react-router-dom";


const Navbar = () => {
    
   
    return ( 
   
        <ul className="navbarUl">  

            <li>
            <Link to='/'>
            <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7jrMV04XdyM7xN8JbMp4SUVoJFf3xPU1mOg&usqp=CAU" alt="" />   
            </Link>
            </li>
            <li><Link to='/??'>??</Link></li>
            <li><Link to='/??'>??</Link></li>
            <li><Link to='/??'>??</Link></li>
        </ul>
       
     );
    } 
 
export default Navbar;