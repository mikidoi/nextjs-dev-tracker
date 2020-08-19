exports.handlePromise = (req, res, promise) => {
  return promise
    .then((result) => {
      // res.writeHead(303, { Location: "http://localhost:3000/kids" });
      // console.log(res.statusCode);
      res.send(result);
      // res.end("hello world\n");
    })
    .catch((error) => res.status(400));
};

exports.catchErrors = (fn) => {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  };
};
