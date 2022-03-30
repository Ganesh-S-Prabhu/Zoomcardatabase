const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://zoomcar:zoomcar@cluster0.i6b6a.mongodb.net/zoomcarcollection?retryWrites=true&w=majority");
};