const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Jithin_88jeevan:071263%40Jj@cluster0.x0rbw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true  });
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;