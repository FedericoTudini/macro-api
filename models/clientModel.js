const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

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
        required: true,
        unique: true
    }
}, { timestamps : true });

clientSchema.plugin(uniqueValidator);

module.exports = mongoose.model('clients', clientSchema);