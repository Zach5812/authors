const {Author} = require("../models/author.model")


module.exports.apiTest = (req, res)=>{
    res.json({message: "ok"})
}

// all authors
module.exports.allAuth = (req, res)=>{
    Author.find() // array of objects
        .then(authList => res.json(authList))
        .catch(err => res.status(400).json(err))
}

// one Author
module.exports.oneAuth = (req, res)=>{
    Author.findOne({_id: req.params.id}) // return the found object
        .then(foundAuth => res.json(foundAuth))
        .catch(err => res.status(400).json(err))
}

// create Auth
module.exports.addAuth = (req, res)=>{
    Author.create(req.body) // will return the created object
        .then(newAuth => res.json(newAuth))
        .catch(err => res.status(400).json(err))
}


// update Auth -- create & getOne
module.exports.updateAuth = (req, res)=>{
    Author.findOneAndUpdate(
        {_id: req.params.id},       // criteria
        req.body, // partial formData 
        {new: true, runValidators:true}
        // new: true -- return the updated object
        // runValidator -- to perform validation specified in model
    )
        .then(updatedAuth =>res.json(updatedAuth))
        .catch(err => res.status(400).json(err))
}


// delete Auth
module.exports.deleteAuth = (req, res)=>{
    Author.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err => res.status(400).json(err))
}