import { Link } from "react-router-dom";
import "./present.css";

const Present = () => {
    return(
        <div className="presContainer">
            <div className="butons">
            <Link to='/home' className="titleb link"><h2 className="btnP link" >COMENZAR</h2></Link>
            </div>
        </div>
    )
}

export default Present;