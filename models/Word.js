const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WordSchema = new Schema ({
    value: {
        type: String,
        required: true
    },
    guesses: [{
        type:String,
        default: ""
    }],
    length: {
        type: Number,
        required: true
    }
});

const Word = mongoose.model("Word", WordSchema);

module.exports = Word;

