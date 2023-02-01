const mongoose = require('mongoose');

const TodoitemSchema = new mongoose.Schema({
    item:{
        type:String,
        required: true
    }
})
//export
module.exports = mongoose.model('todo', TodoitemSchema);
