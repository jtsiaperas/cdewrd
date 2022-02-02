const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GuessSchema = new Schema({
    answer: {
        type: Schema.Types.ObjectId,
        required: true
    },
    attempts: [{ //incorrect words guessed by user
        type: Schema.Types.ObjectId
    }]
});

const Guess = mongoose.model("Guess", GuessSchema);

module.exports = Guess;