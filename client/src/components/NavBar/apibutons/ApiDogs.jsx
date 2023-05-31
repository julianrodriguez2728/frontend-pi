import { useDispatch, useSelector } from "react-redux";
import CardDog from "../../Card/CardDog";
import "../../Card/cards.css"
import { useEffect } from "react";
import { getDogs } from "../../../redux/actions";
const ApiDogs = () =>{
    let dispatch = useDispatch()
    const perros = useSelector(state => state.dogs);
    let filter = perros.filter((dog)=>{
        return Number.isInteger(dog.id)
    })
    useEffect(()=>{
        dispatch(getDogs())
    },[])
    return(
        <div className="containerGeneral">
        <div className="cards-container">
            {   
            perros.length === 0
                ?<div className="loading">
                <img src="https://i.pinimg.com/originals/d2/99/40/d2994005233783287041f6b90980546b.gif" alt=""  className="loading-pic" /> 
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

export default ApiDogs;