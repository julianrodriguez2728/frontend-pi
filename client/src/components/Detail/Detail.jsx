import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogsById, clearDetail } from "../../redux/actions.js";
import { useEffect } from "react";

import "./Detail.css"
const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const dogId = useSelector((state)=> state.dogDetail)
    
    useEffect(()=> {
        dispatch(clearDetail())
        dispatch(getDogsById(id))
    },[])

    return (
        <>
         <div className="allDetail">{
            dogId.length === 0 
            ? 
            <div className="loading">
                    <img src="https://i.pinimg.com/originals/d2/99/40/d2994005233783287041f6b90980546b.gif" alt=""  className="loading-pic" /> 
            </div> 
            : 
            Array.isArray(dogId) ? 
            dogId.map((dog)=>{
                return(
                    <div className="detailContainer" key={dog.id}>
                    <div className="container-img">
                   <img src={dog.image  } className="imageDetail" />
                    </div>
                    <div className="container-info">
                    <h1  className="title-dog">{dog.nombre}</h1>
                    <h3 className="detailh3">{dog.peso}KG`</h3>
                    <h3 className="detailh3">{dog.altura}FT</h3>
                    <h3 className="detailh3">{dog.years} ago</h3>
                    <h3 className="detailh3">{dog.temperamento}</h3>
                    </div>
                    </div>
                )
            })
            :
            <div className="detailContainer" key={dogId.id}>
            <div className="container-img">
            <img src={dogId.image} alt="" className="imageDetail" />
            </div>
            <div className="container-info">
            <h1 className="title-dog">{dogId.nombre}</h1>
            <h3 className="detailh3">peso: {dogId.peso}kg</h3>
            <h3 className="detailh3">Altura: {dogId.altura}cm</h3>
            <h3 className="detailh3">Años: {dogId.years}</h3>
            {   Array.isArray(dogId.temperamento) ? dogId.temperamento.map((e)=>{
                return(
                    <div>
                    <h3 className="detailh3">{e}</h3>
                    </div>
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