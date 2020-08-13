exports.handlePromise = (req, res, promise) => {
  return promise
    .then((result) => {
      res.send(result);
    })
    .catch((error) => res.status(400));
};

exports.catchErrors = (fn) => {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  };
};
