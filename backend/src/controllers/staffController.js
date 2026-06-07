const Staff = require('../models/Staff');

const getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find().populate('userId', 'name email');
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id).populate('userId');
    if (!staff) {
      return res.status(404).json({ message: 'Staff not found' });
    }
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStaffAvailability = async (req, res) => {
  try {
    const { availability } = req.body;
    const staff = await Staff.findByIdAndUpdate(
      req.params.id,
      { availability },
      { new: true }
    );
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllStaff,
  getStaffById,
  updateStaffAvailability,
};
