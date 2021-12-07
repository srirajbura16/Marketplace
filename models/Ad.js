const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 60,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
      enum: ['New', 'Used - Like New', 'Used - Good', 'Used - Fair'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Ad', AdSchema);
