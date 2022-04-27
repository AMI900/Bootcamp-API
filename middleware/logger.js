// @desc Logs request to console
module.exports = (req, res, next) => {
  console.log('Middleware ran');
  next();
};
