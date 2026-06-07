const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['stylist', 'makeup_artist', 'barber', 'therapist'], required: true },
  experience: { type: Number, required: true }, // in years
  salary: { type: Number },
  profileImage: { type: String },
  bio: { type: String },
  rating: { type: Number, default: 0 },
  availability: { type: String, enum: ['online', 'offline', 'busy'], default: 'offline' },
  workingHours: {
    start: String,
    end: String,
  },
  bookedSlots: [
    {
      date: Date,
      time: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Staff', staffSchema);
