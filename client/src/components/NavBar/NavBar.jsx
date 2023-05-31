import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import FilterButton from "./FilterBtn/FilterButton.jsx";
import './NavBar.css';
import { useState } from "react";

const NavBar = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    return(
        <nav>
            <Link to="/home" className="link">
        <h1 className="title" onClick={()=> setIsOpen(!isOpen)}>🐶Perritos🦴</h1>
            </Link>
    
         <div className="cont">
        <div className={`butons-responsive ${isOpen && "open"}`}>
        <Link to="/home"><button className="btnLanding butonsResponsive" onClick={()=> setIsOpen(!isOpen)}>HOME</button></Link>
        <Link to="/form"><button className="btnLanding butonsResponsive" onClick={()=> setIsOpen(!isOpen)}>FORM</button></Link>
        <Link to="/myDogs"><button className="btnLanding butonsResponsive" onClick={()=> setIsOpen(!isOpen)}>MY DOGS</button></Link>
        <Link to="/apiDogs"><button className="btnLanding butonsResponsive" onClick={()=> setIsOpen(!isOpen)}>APIDOGS</button></Link>
        </div>
        <FilterButton />
         </div>
         <SearchBar />

        <div className={`toggle ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        </nav>
    )
}

export default NavBar;