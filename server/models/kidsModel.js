const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const slug = require("slug");

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

// Need to pre save to auto generate slug

kidsModel.pre("save", function (next) {
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slug(this.name);
  next();

  // TODO: make more unik slugs
});

let Kids;
try {
  Kids = mongoose.model("Kids");
} catch {
  Kids = mongoose.model("Kids", kidsModel);
}

module.exports = Kids;
