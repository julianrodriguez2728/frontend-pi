import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions";
import "./Paginate.css";


const Paginate = ({cantidad})=>{
    const {numPage} = useSelector(state=> state)
    const dispatch= useDispatch()

    const next = ()=>{
        dispatch(nextPage())
    }
    const prev = ()=>{
        dispatch(prevPage())
    }
    return(
        <div className="containerPaginate">
            {   
                numPage > 1 ?<button onClick={prev} className="botonPN">◀</button> : null
            }
            <h3 className="numberC">{numPage-1}</h3>
            <h3 className="number">{numPage}</h3>
            <h3 className="numberC">{numPage+1}</h3>
            {
                numPage < cantidad ? <button onClick={next} className="botonPN">▶</button> : null
            }
    
        </div>
    )
}

export default Paginate;