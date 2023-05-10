const { where } = require("sequelize");
const {Dog} = require("../db");
const axios = require('axios');
const {Temperament} = require("../db");
const {API_KEY} = process.env;


const dogos = async() =>{

    const bdd = await Dog.findAll()

    const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`);

    const response = data.map((element) =>  {
        return{
            id: element.id,
            image: element.image,
            nombre: element.name,
            altura: element.height,
            peso: element.weight,
            temperamento: element.temperament,
            years: element.life_span
        }
    })
    return [...bdd, ...response]
}
const dogFn = async(id, source) => {
    let api = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`);
   
    const user =  source === "api" ? api.data : await Dog.findByPk(id);
  
    return user
}


const createdDog = async(name, altura, peso, image,years)=>{

     return await Dog.create({name, altura, peso,image,years});

};

const getName = async (name) => {
    const bdd = await Dog.findAll({
        where: {
            name: name
        }
    });
    const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`);

   
    if(bdd.length > 0){
        return bdd
    }

    return data.filter(dog => dog.name.toLowerCase() === name);
}

const temperament = async() => {
    const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`);
    

    const list = data.map(temp=>{
        return{
            nombre: temp.temperament
        }
    })
    console.log(list)
    await Temperament.bulkCreate(list)
    
    const responseDataBase = await Temperament.findAll()

    return responseDataBase;
}

module.exports ={
    createdDog,
    dogos,
    dogFn,
    getName,
    temperament
    
}