const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const kidsModel = new Schema({
  name: { type: String },
  description: { type: String },
});

let Kids;
try {
  Kids = mongoose.model("Kids");
} catch {
  Kids = mongoose.model("Kids", kidsModel);
}

module.exports = Kids;
