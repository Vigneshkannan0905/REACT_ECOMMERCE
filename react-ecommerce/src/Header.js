import { FaSearch,FaUser} from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Header.css';
import { useNavigate } from "react-router-dom";

const Header = ({userName,setcartVisibility,setloginModalVisibility,isLoggedin}) => {
  const navigate=useNavigate()
    return(
        <header className="Header">
          <Link to='/' className="title_ no-select "><p >Shopify</p></Link>
          <form action="search">
                <input className="searchBox" placeholder="Search for a product" />
                <div className="searchIcon">
                  <FaSearch />
                </div>            
          </form>

          <ul className="headernavs no-select">
            <li>
              <Link to="products">Products</Link>
            </li>
            <li>
              <Link to="category">Categories</Link>
            </li>
            <li onClick={()=>{
              if(isLoggedin){
                navigate("/profile")
              }
              else{
                setloginModalVisibility(true)
              }}}>
              <div className="login-icon">
                <div><FaUser/></div>
                <p>{userName}</p>
              </div>
            </li>
            <li onClick={() => setcartVisibility(true)}>
              <BsCartPlus />
            </li>
          </ul>

      </header>
    )
}
 
export default Header