const { Project } = require("../models/project.models");

module.exports.createProject = ( req, res ) => {
    const { projectTitle, dueDate, projectStatus } = req.body;

    Project.create({
        projectTitle, 
        dueDate, 
        projectStatus
    })
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

module.exports.allProjects = ( req, res ) => {
    Project.find({}).sort("dueDate")
        .then( projects => res.json(projects) )
        .catch( err => res.json(err) )
}

module.exports.oneProject = ( req, res ) => {
    Project.findOne( {_id:req.params.id})
        .then( project => res.json(project))
        .catch( err => res.json(err))
}

module.exports.updateProject = ( req, res ) => {
    Project.findByIdAndUpdate( { _id: req.params.id}, req.body, {runValidators:true})
        .then(res => res.json(res))
        .catch( err => res.json(err))
}

module.exports.deleteProject = (req, res ) => {
    Project.findByIdAndDelete({ _id:req.params.id})
    .then(deleteConfirmation => {
        console.log(deleteConfirmation);
        res.json(deleteConfirmation);
    })
    .catch( err => res.json(err))
}