const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const kidsModel = new Schema({
  name: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("Kids", kidsModel);
