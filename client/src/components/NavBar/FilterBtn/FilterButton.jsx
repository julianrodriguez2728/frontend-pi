import { useDispatch, useSelector } from "react-redux";
import { filter_page, getAllTemperament , filterTemp, resetPage, filterPeso} from "../../../redux/actions.jsx";
import { useEffect } from "react";
import '../NavBar.css';

const FilterButton = () => {
    let empty = [];
    const dispatch = useDispatch();

    const temperamentSelect = useSelector((state)=> state.temperaments);

    temperamentSelect.forEach((element)=>{

        if(element.nombre){
            const resp = element.nombre.split(",")
            const emotion = {nombre : resp, id:element.id}
          
                emotion.nombre.forEach((el)=> {
                    if(!empty.includes(el)){
                        empty.push(el)
                    }
                })
            }

    })
    const handleFilter = (event)=> {
        dispatch(filter_page(event.target.value))
    }
   
    const handleTemperament = (event)=>{
       dispatch(filterTemp(event.target.value))
       dispatch(resetPage())
    }
    const handlePeso = (event) => {
        dispatch(filterPeso(event.target.value))
    }
    useEffect(()=> {
        dispatch(getAllTemperament())
    },[dispatch])

    return(
        <div>
            <select onChange={handleFilter} className="btnLanding">
                <option value='a' className="option">A-Z</option>
                <option value='b' className="option">Z-A</option>
            </select>
            <select onChange={handleTemperament}className="btnLanding">
                <option value="All" className="option">TEMPERAMENTS</option>
                {
                    empty.map((temperament)=> {
                        return(
                            <option value={temperament}  className="option" key={temperament.id}>{temperament}</option>
                        )
                    })
                }
            </select>
            <select name="peso" onChange={handlePeso} className="btnLanding">
                <option value="">WEIGHT</option>
                <option value="HIGH">+</option>
                <option value="LOW">-</option>
            </select>
        </div>
    )
}

export default FilterButton;