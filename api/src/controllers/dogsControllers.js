const {Op} = require("sequelize")
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
            image: element.image.url,
            imageId: element.image.id,
            nombre: element.name,
            altura: element.height.metric,
            peso: element.weight.imperial,
            temperamento: element.temperament,
            years: element.life_span
        }
    })
    let results = [...bdd, ...response];

    // const limit = 25; // Cantidad deseada de elementos
  
    // if (limit && Number.isInteger(Number(limit))) {
    //   let i = 0;
    //   let limitedResults = [];
    //   while (i < limit && i < results.length) {
    //     limitedResults.push(results[i]);
    //     i++;
    //   }
    //   results = limitedResults;
    // }
  
    return results;
}
const dogFn = async(id, source) => {
    let api = await dogos();
    console.log(api)

    let filterId = api.filter((element)=> {
       return  element.id === +id
    })
    
    const user =  source === "api" ? filterId : await Dog.findByPk(id);
  
    return user
}


const createdDog = async(nombre, altura, peso, years, temperamento,image)=>{

     return await Dog.create({nombre, altura, peso,years,temperamento,image});

};

const getName = async (nombre) => {
    const name = nombre.toLowerCase();
    
   const bdd = await Dog.findAll({
        where: {
            nombre: {
                [Op.iLike] : `%${name}%`
            }
        }
    });
    let api = await dogos();


    const response = api.filter((dog) => {

        let min = dog.nombre.toLowerCase()

        let spliting = min.split(' ')

        return spliting.some(element=> element.includes(name))
    });
    if(bdd.length > 0){
        return bdd
    }
    
   
    if(response.length === 0){
        alert("NO HAY PERRO CON ESE NOMBRE")
    }else{
        return response.map((element)=> {
            return{
                id: element.id,
                image: element.image,
                nombre: element.nombre,
                altura: element.altura,
                peso: element.peso,
                temperamento: element.temperamento,
                years: element.years
            }
        })
    }

   
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