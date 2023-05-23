const { createdDog, dogos, dogFn , getName, temperament} = require("../controllers/dogsControllers")

const dogsRace = async(req, res) => {

    const {nombre} =  req.query;
    // const min = name.toLowerCase()
    // console.log(min)
    try {
        if(nombre){
            const resp = await getName(nombre)
            if(resp.length !== 0){
                res.status(200).json(resp)
            }
            else{
                alert("el perrito no existe papi")
            }
            
        } else{

            const results = await dogos()
            res.status(200).json(results)
        }
        
    } catch (error) {
        res.status(400).json({error: error.message})

    }
};

const createDog = async (req,res) => {

    const {nombre, altura, peso, years, temperamento,image} = req.body;

    try {
        const response = await createdDog(nombre,altura,peso,years,temperamento,image);
        res.status(200).json(response)

    } catch (error) {

        res.status(400).json({error: error.message})
        
    }
}
const dogDetail = async(req,res) => {

    const { idRaza } = req.params;
    const source = isNaN(idRaza) ? "bdd" : "api";
    
    try {

        const response =  await dogFn(idRaza,source);
        res.status(200).json(response);


    } catch (error) {

        res.status(400).json({error:error.message})
    }
}
// const dogName = async(req,res) => {
//     const {name} = req.query;
//     const min = name.toLowerCase()

//     const response = await getName(min)

//     try {

//         res.status(200).json(response)
        
//     } catch (error) {

//         res.status(400).json({error:error.message});

//     }
// }
const temperamentDogs = async (req,res) => {
    try {
        const response = await temperament();
        res.status(200).json(response)

    } catch (error) {
        
        res.status(400).json({error:error.message});

    }
}
module.exports = {
    createDog,
    dogsRace,
    dogDetail,
    temperamentDogs
}