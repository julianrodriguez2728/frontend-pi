import { useSelector } from "react-redux";
import CardDog from "../../Card/CardDog";
import "../../Card/cards.css"

const ApiDogs = () =>{
      
    const perros = useSelector(state => state.dogs);
    let filter = perros.filter((dog)=>{
        return Number.isInteger(dog.id)
    })

    return(
        <div className="containerGeneral">
        <div className="cards-container">
            {
                filter.map((dog)=>{
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

export default ApiDogs;