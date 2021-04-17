const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:daBallerSquad98$@dacluster0.x22ip.mongodb.net/daCluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(error) {
    if (error) {
        console.error('Unable to connect: ', error);
    } else {
        console.log('Connected to MongoDB');
    }
});



mongoose.set('useCreateIndex', true);

// let Schema = mongoose.Schema;
// let showtimeSchema = new Schema({
//     id: String,
//     title: String,
//     location: Number,
//     dates: String,
//     times: [String]
// }, {
//     collection: 'showtimes'
// });


// module.exports.Showtime = mongoose.model('showtime', showtimeSchema);

