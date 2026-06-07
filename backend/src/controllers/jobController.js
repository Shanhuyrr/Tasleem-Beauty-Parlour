const JobApplication = require('../models/JobApplication');

const submitApplication = async (req, res) => {
  try {
    const { name, email, phone, position, experience, skills, resume, coverLetter } = req.body;

    const application = new JobApplication({
      name,
      email,
      phone,
      position,
      experience,
      skills,
      resume,
      coverLetter,
    });

    await application.save();
    res.status(201).json({ message: 'Application submitted', application });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const application = await JobApplication.findByIdAndUpdate(
      req.params.id,
      { status, reviewedAt: Date.now(), reviewedBy: req.user.id },
      { new: true }
    );
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  submitApplication,
  getAllApplications,
  updateApplicationStatus,
};
