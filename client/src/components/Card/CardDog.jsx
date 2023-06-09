import { Link } from "react-router-dom"
import "./cards.css"

const CardDog = ({nombre, image,  peso ,temperamento,id,years}) => {
    return(
        <div className="container2" key={id}>
            <Link to={`/dogs/${id}`}>
            <img src={image} alt="" id="img-dogs" />
            </Link>
            <div className="dog-container">

            <h2 className="title-dog">{nombre}🐾</h2>
            <div className="contianer-detail">
            <h3 className="cardh3">{peso}</h3>
            <h3 className="cardh3">{years}</h3>
            <div className="temperamentContainer">
            <h4 className="cardh4">.{temperamento}</h4>
            </div>
            </div>
            
            </div>
        </div>
    )
}

export default CardDog