import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogsById } from "../../redux/actions";
import { useEffect } from "react";
import "./Detail.css"
const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const dogId = useSelector((state)=> state.dogDetail)
    
    useEffect(()=> {
        dispatch(getDogsById(id))
    },[])

    return (
        <>
         <div className="allDetail">{
            Array.isArray(dogId) ? 
            dogId.map((dog)=>{
                return(
                    <div className="detailContainer">
                    <div className="container-img">
                   <img src={dog.image  } className="imageDetail" />
                    </div>
                    <div className="container-info">
                    <h1  className="title-dog">{dog.nombre}</h1>
                    <h3>{dog.peso}KG`</h3>
                    <h3>{dog.altura}FT</h3>
                    <h3>{dog.years} ago</h3>
                    <h3>{dog.temperamento}</h3>
                    </div>
                    </div>
                )
            })
            :
            <div className="detailContainer">
            <div className="container-img">
            <img src={dogId.image} alt="" className="imageDetail" />
            </div>
            <div className="container-info">
            <h1 className="title-dog">{dogId.nombre}</h1>
            <h3>peso: {dogId.peso}kg</h3>
            <h3>Altura: {dogId.altura}cm</h3>
            <h3>Años: {dogId.years}</h3>
            {Array.isArray(dogId.temperamento) ? dogId.temperamento.map((e)=>{
                return(
                    <p>temperamento {e}</p>
                    )
                }): <p>{dogId.temperamento}</p>}
            </div>
            </div>
            }
          
        </div>
            </>
    )
}

export default Detail;