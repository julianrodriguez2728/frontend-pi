const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { createDog , dogsRace, dogDetail, dogName, temperamentDogs} = require("../handlers/dogsHandlers")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dogs", dogsRace);
router.get("/dogs/:idRaza", dogDetail);
router.get("/dogFound/",dogName);
router.post("/dogs", createDog);
router.get("/temperament", temperamentDogs);
// router.get('/dogs/:idRaza', getRazaById)


module.exports = router;
