const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String, // cloudinary url
    },
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    dueDate: {
      type: Date,
    },
    priority: {
      type: String,
      enum: ['high', 'medium', 'low'],
      default: 'medium',
    },
    type: {
      type: String,
      enum: ['personal', 'office', 'freelance'],
      default: 'personal',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Task', taskSchema);
