const mongoose = require('mongoose');

const testcaseSchema = new mongoose.Schema({
    problem: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Problem',
        required: true
    },
    input: {
        type: String,
        required: true
    },
    output: {
        type: String,
        required: true
    }
});



module.exports = mongoose.model("Testcase", testcaseSchema);