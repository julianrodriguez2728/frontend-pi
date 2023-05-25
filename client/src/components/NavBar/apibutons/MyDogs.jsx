import {  useSelector } from "react-redux";
import CardDog from "../../Card/CardDog";
import "../../Card/cards.css"
import { Link } from "react-router-dom";

const MyDogs = () =>{

    const perros = useSelector(state => state.dogs);
    let filter = perros.filter((dog)=>{
        return isNaN(dog.id)
    })
    

    return(
        <div className="containerGeneral">
        <div className="cards-container">
            {
                filter.length === 0 
                ? <div className="noOne">
                <h2>No tienes ningun perrito.... puedes crear tus perros haciendo click  <Link to="/form">acá</Link> </h2> 
                </div>
                :filter.map((dog)=>{
                    return(
                        <CardDog 
                        key={dog.id}
                        id={dog.id}
                        image = {dog.image}
                        nombre={dog.nombre}
                        temperamento={dog.temperamento}
                        peso={dog.peso}
                        />
                        )
                    })
                }
            </div>
            </div>
    )
}

export default MyDogs;