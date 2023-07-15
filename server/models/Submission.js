const mongoose = require('mongoose');
const submissionSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    problem: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Problem',
         required: true
        },
         
    code: {
         type: String,
         required: true
        },
    result: {
            type: String, required: true,
            enum: ["approved","rejected","TLE","MLE","WA","RE"]
        }
});



module.exports = mongoose.model("Submission", submissionSchema);