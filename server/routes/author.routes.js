const AuthController = require("../controllers/author.controller")

module.exports = (app)=>{
    app.get("/api/testing", AuthController.apiTest);
    app.get("/api/authors", AuthController.allAuth);
    app.get("/api/authors/:id" , AuthController.oneAuth);
    app.post("/api/authors", AuthController.addAuth);
    app.patch("/api/authors/:id", AuthController.updateAuth);
    app.delete("/api/authors/:id", AuthController.deleteAuth);
}