// @desc  Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamp' });
};

// @desc  Get single bootcamps
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show ${req.params.id} bootcamp` });
};

// @desc  Create new bootcamps
// @route Post /api/v1/bootcamps
// @access Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' });
};

// @desc  Update bootcamp
// @route Put /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

// @desc  Delete bootcamp
// @route delete /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
