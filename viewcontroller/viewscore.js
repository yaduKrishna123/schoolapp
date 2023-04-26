const student = require('../model/studentschema');

exports.viewscore = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await student.findOne({ userid: id, result: { $exists: true } });

    if (data) {
      res.status(200).json(data.result);
    } else {
      res.status(404).json({ message: 'Student not found or result not available' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
