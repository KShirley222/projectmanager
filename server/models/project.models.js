const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    projectTitle:{
        type:String,
        required: [true, "Project must have a title"],
        minlength: [3, "Project title must be more than 3 characters."]

    },
    dueDate:{
        type: Date,
        required: [true, "Project must have a due date."],
        // in the future
    },
    projectStatus:{       
        type:String
    }

})

module.exports.Project = mongoose.model("Project", ProjectSchema);