const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/taskManager', { useNewUrlParser: true }).then(() => {
    console.log("connection sucess");
}).catch((e) => {
    console.log("connection failed ");
    console.log(e);
});


module.exports = {
    mongoose
};
