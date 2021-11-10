const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // ads: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Ad',
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', UserSchema);
