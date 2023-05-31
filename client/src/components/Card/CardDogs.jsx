import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions.jsx";
import CardDog from "./CardDog";
// import Paginate from "./Paginate";
import "./cards.css"
import Paginate from "./Paginate";

const CardDogs = () => {
    const dispatch = useDispatch();

    const dogs = useSelector((state)=> state.dogs)
    const {numPage} = useSelector(state=> state);

    let desde = (numPage-1) * 8;
    let hasta  = numPage *8;
    let cantidad = dogs.length / 8;
    let viewDogs = dogs.slice(desde,hasta)
    useEffect(()=>{
        dispatch(getDogs())
    },[dispatch])

    return(
        <div className="containerGeneral">
        <div className="cards-container">

            {
                dogs.length === 0 
                ?<div className="loading">
                    <img src="https://i.pinimg.com/originals/d2/99/40/d2994005233783287041f6b90980546b.gif" alt=""  className="loading-pic" /> 
                </div> 
                :viewDogs.map((dog)=> {
                    return(
                        <CardDog 
                        key={dog.id}
                        id={dog.id}
                        image = {dog.image}
                        nombre={dog.nombre}
                        temperamento={dog.temperamento}
                        peso={dog.peso}
                        years={dog.years}
                        />
                        )
                    })
            }
        </div>
<Paginate cantidad={cantidad}></Paginate>
        </div>
    )
}

export default CardDogs