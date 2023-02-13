const mongoose = require('mongoose')
 
const Artikel = new mongoose.Schema({
    karya: String,
    tanggal_publish: Date,
    isi: String,
});
 
const Article = mongoose.model('artikel', Artikel);
module.exports = Article; 