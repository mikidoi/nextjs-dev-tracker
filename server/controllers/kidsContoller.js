const mongoose = require("mongoose");
const Kids = require("../models/kidsModel");
const { handlePromise } = require("../../handlers/helpers");

exports.createKids = async (req, res) => {
  // const myData = await new Kids(req.body).save();
  const kid = new Kids(req.body);
  // await kid.save();
  // req.flash("success", `Successfully created ${kid.name}`);
  // res.redirect(`/`);

  await handlePromise(req, res, kid.save());
};
