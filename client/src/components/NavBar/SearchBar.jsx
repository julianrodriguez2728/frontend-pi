import {  useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByName } from "../../redux/actions";
import { resetPage } from "../../redux/actions";
import lupa from "./search.png"
const SearchBar = () => {
    const dispatch = useDispatch();
    // const {dogs} = useSelector(state=> state)
    const [nombre, setNombre] = useState("");
    const handleChange = (event) => {
        setNombre(event.target.value);
    } 
    const submitChange = (event) => {
        event.preventDefault()
        dispatch(getDogsByName(nombre))
       dispatch(resetPage())
    }
    return ( 
        <div>
            <form className="formSearch">
                <input type="text" name="nombre" onChange={handleChange} placeholder="search here..." className="searchbar"/>
                <button onClick={submitChange} className="butonS"><img src={lupa} alt="imagen" className="searchBtn" /></button>
            </form>
        </div>
    )
}

export default SearchBar;