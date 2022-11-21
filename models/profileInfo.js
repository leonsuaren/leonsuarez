const mongoose = require('mongoose');

const ProfileInfoSchema = new mongoose.Schema({
  profileName: {
    type: String,
    require: true
  },
  profileTitle: {
    type: String,
    require: true
  },
  profileAvatar: {
    type: String,
    require: true
  },
  profileLanguage: {
    type: String,
    require: true
  }
});

const ProfileInfo = mongoose.model('Profile', ProfileInfoSchema);

module.exports = ProfileInfo;