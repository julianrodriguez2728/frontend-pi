import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions";
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
                viewDogs.map((dog)=> {
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
<Paginate cantidad={cantidad}></Paginate>
        </div>
    )
}

export default CardDogs