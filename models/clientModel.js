const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    nomeCompleto: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cell: {
        type: Number,
        required: true
    }
}, { timestamps : true });

module.exports = mongoose.model('clients', clientSchema);