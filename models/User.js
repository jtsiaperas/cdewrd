const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    //words is an array of objects containing the ids of individual words, ref links to the word model
    //lets me populate the list with the words user has already attempted
    words: [{
        type: Schema.Types.ObjectId,
        ref: "Word"
    }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;