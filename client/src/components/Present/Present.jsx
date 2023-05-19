import { Link } from "react-router-dom";
import "./present.css";
import img from "./corage.png";
import scooby from "./scooby.png";
import goofy from "./goofy.png";

const Present = () => {
    return(
        <div className="presContainer">
            <div className="butons">
            <Link to='/home' className="titleb"><h2 className="btnP">COMENZAR</h2></Link>
            </div>
            <div className="image">
            <img src={img} alt="" className="imgP" />
            <img src={scooby} alt="" className="imgP" />
            <img src={goofy} alt="" className="imgP" />
            </div>
        </div>
    )
}

export default Present;