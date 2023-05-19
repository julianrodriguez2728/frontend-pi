import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import FilterButton from "./FilterBtn/FilterButton";
import './NavBar.css';

const NavBar = ()=>{
    return(
        <nav>
        <h1 className="title">🐶Perritos🦴</h1>
        <div className="botonsLanding"> 
        <Link to="/home"><button className="btnLanding">HOME</button></Link>
        <Link to="/form"><button className="btnLanding">FORM</button></Link>
        <Link to="/myDogs"><button className="btnLanding">MY DOGS</button></Link>
        <Link to="/apiDogs"><button className="btnLanding">APIDOGS</button></Link>
        <FilterButton />
        </div>
        <div>
        <SearchBar />
        </div>
        </nav>
    )
}

export default NavBar;