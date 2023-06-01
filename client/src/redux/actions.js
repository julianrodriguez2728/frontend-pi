import { DOG_DETAIL, GET_DOGS , NEXT_PAGE, PREV_PAGE, DOG_SEARCH_NAME, FILTER_PAGE, TEMPERAMENTS, FILTER_TEMPERAMENTS, CREATE_DOG, RESET_PAGE, ORDER_PESO, CLEAR_DETAIL} from "./action_types.js";
import axios from "axios"

export const getDogs = () => {
    return async function(dispatch){
      try {
        let perros = await axios.get('/dogs')
        let destructuring = perros.data;
        if(destructuring){
          alert("ESTAN LLEGANDO LES PERRES")
        }
        return dispatch({type: GET_DOGS, payload: destructuring})
      } catch (error) {
        alert("BUENAS NOCHES AMERICA AHMMM")
      }
    }
}

export const getDogsById = (id) => {
  return async function(dispatch){
    try {
      await axios.get(`/dogs/${id}`)
      .then(response => response.data)
      .then(data => dispatch({type: DOG_DETAIL, payload: data}))
    } catch (error) {
      alert(error)
    }
     
  }
}

export const getDogsByName = (name) => {
  return async function(dispatch){
    try {
     const resp =  await axios.get(`/dogs/?nombre=${name}` )
      let perr = resp.data;

     if(perr.length > 0) dispatch({type: DOG_SEARCH_NAME, payload: perr})
    } catch (error) {
      alert("No se encontro el perro")
    }
      
  }
}

export const filterPeso = (obj) =>{
  return{type: ORDER_PESO , payload: obj}
}



export const clearDetail = () =>{
  return {type: CLEAR_DETAIL  }
}
export const filter_page = (order) => {
  return {type: FILTER_PAGE, payload:order}
}

export const getAllTemperament = () => {
  return async function(dispatch){
    try {
      await axios.get(`/temperament`)
    .then(response => response.data)
    .then(data => dispatch({type: TEMPERAMENTS, payload: data}))
    } catch (error) {
      console.log(error);
    }
    
}
}
export const filterTemp = (event) => {
  return {type: FILTER_TEMPERAMENTS, payload: event}
}
export const nextPage = ()=>{
  return {type: NEXT_PAGE }
}
export const prevPage = ()=>{
  return {type: PREV_PAGE }
}
export const resetPage = ()=>{
  return{
    type: RESET_PAGE
  }
}
export const createDog = form => async dispatch => {
  try {
    let dogs = await axios.post('/dogs', form);
    console.log(dogs)
    return dispatch({
      type: CREATE_DOG,
      payload: dogs
    })
  } catch (error) {
    console.log(error)
  }
 
  // return async function(dispatch){
  //   console.log(obj)
  //   return await axios.post(`http://localhost:3001/dogs`, form)
  //   .then(response=> response.data)
  //   .then(data=> console.log(data))
  //   .then(data=>  dispatch({type: CREATE_DOG, payload: data}))
    
  // }
}