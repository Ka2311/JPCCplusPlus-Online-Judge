const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
    problemName: {
        type:String,
    },
    problemDescription: {
        type:String,
    },
    
    difficulty: {type: String, 
                 required: true,
                 enum: ["easy", "medium", "hard"],
                }
    
});

module.exports = mongoose.model("Problem", problemSchema);