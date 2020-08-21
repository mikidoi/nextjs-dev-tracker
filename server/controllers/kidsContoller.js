const mongoose = require("mongoose");
const Kids = require("../models/kidsModel.js");
const { handlePromise } = require("../../handlers/helpers");
const multer = require("multer"); // help uploading file
const jimp = require("jimp"); // An image processing libray
const uuid = require("uuid"); // A universally unique identifier (UUID)
// const cloudinary = require("cloudinary").v2;

const multerOptions = {
  storage: multer.memoryStorage(),
  //TODO: try to use diskStorage also and compare
  //https://code.tutsplus.com/tutorials/file-upload-with-multer-in-node--cms-32088
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith("image/");
    if (isPhoto) {
      next(null, true);
    } else {
      next({ message: "That filetype isn't allowed!" }, false);
    }
  },
};

exports.upload = multer(multerOptions).single("photo");

exports.resize = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }
  const extension = req.file.mimetype.split("/")[1];
  req.body.photo = `${uuid.v4()}.${extension}`;

  const photo = await jimp.read(req.file.buffer);
  await photo.resize(800, jimp.AUTO);
  await photo.write(`public/images/${req.body.photo}`);

  next();
};

exports.createKids = async (req, res) => {
  // console.log("req.file: ", req.file);

  // TODO: Use cloudinary to upload images
  // let kidPicture;
  // if (req.file) {
  //   const image = await cloudinary.uploader.upload(req.file.path, {
  //     width: 512,
  //     height: 512,
  //     crop: "fill",
  //   });
  //   kidPicture = image.secure_url;
  // }

  req.body.photo = req.body.photo;
  const kid = new Kids(req.body);
  // console.log("kid: ", kid);
  // await kid.save();
  // req.flash("success", `Successfully created ${kid.name}`);
  // res.redirect(`/`);

  await handlePromise(req, res, kid.save());
};

exports.getKids = async () => {
  const kidsData = await Kids.find();
  return kidsData;
};
