import { useDispatch, useSelector} from "react-redux";
import "./form.css"
import {  useState } from "react";
import { createDog } from "../../redux/actions.js";
import {useNavigate} from "react-router-dom"

const Form = ()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nombre: '',
        altura:'',
        peso:'',
        years:'',
        temperamento:'',
        image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/OHXQVXBGDRBK5CLDTXEPBLXIXM.jpg'
    })
    
    const [errors,setErrors] = useState({
        nombre: '',
        altura:'',
        peso:0,
        years:0,
        temperamento:''
    })
    
    let empty = [];
    
    const temperamentSelect = useSelector((state)=> state.temperaments);
    const perritos = useSelector((state) => state.dogs);
    
    temperamentSelect.forEach((element)=>{
        if(element.nombre){
            const emotion = element.nombre.split(",")
            emotion.forEach((el)=> {
                if(!empty.includes(el)){
                    empty.push(el)
                }
            })
        }
    })
    
    const handleOnChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        handleError()
    }

    const handleButtons = (event)=>{
        if(form.temperamento.length < 6){
           setForm({
            ...form,
            temperamento: [...form.temperamento, event.target.value]
           })

        }


    }
    const include =  perritos.some(perrito => perrito.nombre.toLowerCase() === form.nombre.toLowerCase());
    console.log(include)
    const handleError = ()=> {
        if(/\d/.test(form.nombre)){
            setErrors({
                ...errors,
                nombre:'The name cannot contain numbers'
            })
        }else if(include === true){
            setErrors({
                ...errors,
                nombre:'YA EXISTE'
            })
        }
        else errors.nombre = ''
        if(form.altura > 80){
            setErrors({
                ...errors,
                altura:"Enter a height less than 40"
            })
        }else errors.altura= ''

        if(form.peso > 120){
            setErrors({
                ...errors,
                peso:"Enter a weight less than 120"
            })
        }else errors.peso= ''
        if(form.years > 25){
            setErrors({
                ...errors,
                years:'Enter an age less than 25'
            })
        }else errors.years=''
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(createDog(form))
        navigate('/home')
        setForm({
        nombre: '',
        altura:'',
        peso:'',
        years:'',
        temperamento:''
        })
    }
    

    return(
        <div className="formContainer">
            <form className="Form" onSubmit={handleSubmit}>
            <h2 className="title">Crea tu perrito: </h2>
                <div className="container-input">

                <label>Nombre:</label>
                {errors.nombre ? <p className="errorType">{errors.nombre}</p>: ''}
                <input type="text" name="nombre" placeholder="Ingresa su nombre: "  onChange={handleOnChange}/>
                </div>

                <div className="container-input">
                <label>Altura:</label>
                {errors.altura ? <p className="errorType">{errors.altura}</p>: ''}
                <input type="number" name="altura" placeholder="High "  onChange={handleOnChange}/>
                </div>

                <div className="container-input">
                <label>Peso:</label>
                {errors.peso ? <p className="errorType">{errors.peso}</p>: ''}
                <input type="number" name="peso" placeholder="Ingresa su peso Min: "  onChange={handleOnChange}/>
                </div>

                <div className="container-input">
                <label>Años de vida:</label>
                {errors.years ? <p className="errorType">{errors.years}</p>: ''}
                <input type="number" name="years" placeholder="Ingresa sus años de vida: "  onChange={handleOnChange}/>
                </div>
                <div className="container-input">

                <label>temperamentos:</label>

                <div className="btnForm">
                <select onChange={handleButtons} className="btnLanding">
                <option value="" className="option">temperament</option>

                    {
                        empty.map((element)=>{
                            return(
                                
                                <option className="buton option" 
                                type="checkbox"
                                id="myButton" 
                                name="temperamento"  
                                value={element} 
                                
                                >
                                {element}
                                
                                </option>

)
                            })
                    }
                        </select>
                <select onChange={handleButtons} className="btnLanding">
                <option value="" className="option">temperament</option>

                {
                    empty.map((element)=>{
                        return(
                            
                            <option className="buton option" 
                            type="checkbox"
                            id="myButton" 
                            name="temperamento"  
                            value={element} 
                            
                            >
                            {element}
                            
                            </option>

                            )
                        })
                    }
                    </select>
                    <select onChange={handleButtons} className="btnLanding">
                    <option value="" className="option">temperament</option>
                {
                    empty.map((element)=>{
                        return(
                            
                            <option className="buton option" 
                            type="checkbox"
                            id="myButton" 
                            name="temperamento"  
                            value={element} 
                            
                            >
                            {element}
                            
                            </option>

)
})
}
    </select>
</div>              
</div>
            <button type="submit" className="butonForm" disabled={!form.nombre || !form.altura  || !form.years|| !form.peso||errors.nombre || errors.altura  || errors.years|| errors.peso} >Crear</button>
            </form>
        </div>
    )
}

export default Form;