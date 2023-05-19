import { Link } from "react-router-dom"
import "./cards.css"

const CardDog = ({nombre, image,  peso ,temperamento,id}) => {
    return(
        <div className="container2">
            <Link to={`/dogs/${id}`}>
            <img src={image} alt="" id="img-dogs" />
            </Link>
            <div className="dog-container">

            <h2 className="title-dog">{nombre}🐾</h2>
            <div className="contianer-detail">
            <h3>{peso}</h3>
            <div className="temperamentContainer">
            <h4>.{temperamento}</h4>
            </div>
            </div>
            
            </div>
        </div>
    )
}

export default CardDog