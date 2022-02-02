const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//word must be immutable, user can not be allowed to alter word in any way. neither should program. should only be read from db
const WordSchema = new Schema ({
    value: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true
    }
});

const Word = mongoose.model("Word", WordSchema);

module.exports = Word;

