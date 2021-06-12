const PetController = require("../controllers/pet.controller")

module.exports = app => {
    //create
    app.post("/api/pets", PetController.createPet)
    //Read
    app.get("/api/pets", PetController.getAll)
    app.get("/api/pets/:idd", PetController.getOne)
    //update
    app.put("/api/pets/:id", PetController.updatePet)
    //delete
    app.delete("/api/pets/:iddd", PetController.deletePet)
}

