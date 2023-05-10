const { createdDog, dogos, dogFn , getName, temperament} = require("../controllers/dogsControllers")

const dogsRace = async(req, res) => {

    try {

        const response = await dogos();
        res.status(200).json(response)

    } catch (error) {

        res.status(400).json({error: error.message})

    }
};

const createDog = async (req,res) => {

    const {name, altura, peso, image, years} = req.body;

    try {
        const response = await createdDog(name,altura,peso,image,years);
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
const dogName = async(req,res) => {
    const {name} = req.query;
    const min = name.toLowerCase()

    const response = await getName(min)

    try {

        res.status(200).json(response)
        
    } catch (error) {

        res.status(400).json({error:error.message});

    }
}
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
    dogName,
    temperamentDogs
}