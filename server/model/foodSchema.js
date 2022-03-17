const mongoose = require("mongoose");

// schema

const listSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  daysSinceIAte: {
    type: Number,
    required: true,
  },
});

// model

const List = mongoose.model("List", listSchema);

// export
module.exports = List;
