const ProjectController = require('../controllers/project.controllers');

const urlCheck = ( res, req, next ) => {
    console.log( req.url );
    next();
}

module.exports = function(app){
    app.post("/project", ProjectController.createProject);
    app.get('/project', ProjectController.allProjects);
    app.get('/project/:id', ProjectController.oneProject);
    app.put('/project/:id', ProjectController.updateProject);
    app.delete('/project/:id', ProjectController.deleteProject);
}