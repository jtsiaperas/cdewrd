const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WordListSchema = new Schema({
    name: { // name used to differentiate different word lengths, similar to json files
        type: String,
        required: true
    },
    //words is an array of objects containing the ids of individual words, ref links to the word model
    words: [{
        type: Schema.Types.ObjectId,
        ref: "Word"
    }]
});

const WordList = mongoose.model("WordList", WordListSchema);

module.exports = WordList;