mongoose = require('mongoose');

const quotesSchema = mongoose.Schema({
    quotes: []
})

const quotesModel = mongoose.model('Quotes',quotesSchema)

module.exports = quotesModel;