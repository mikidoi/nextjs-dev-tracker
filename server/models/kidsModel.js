const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const kidsModel = new Schema({
  name: { type: String, trim: true, required: "Please enter a kid name" },
  slug: String,
  description: { type: String, trim: true },
  created: {
    type: Date,
    default: Date.now,
  },
  photo: String,
});

let Kids;
try {
  Kids = mongoose.model("Kids");
} catch {
  Kids = mongoose.model("Kids", kidsModel);
}

module.exports = Kids;
