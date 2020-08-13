const mongoose = require("mongoose");
const Kids = require("../models/kidsModel");

exports.createKids = async (req, res) => {
  // const myData = await new Kids(req.body).save();
  const myData = new Kids(req.body);

  await myData
    .save()
    .then((result) => res.send(result))
    .catch((error) => res.status(400));
  // await myData
  //   .save()
  //   .then((result) => {
  //     res.json(result);
  //   })
  //   .catch((err) => {
  //     res.status(400);
  //   });
};
