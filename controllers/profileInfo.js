const ProfileInfo = require('../models/profileInfo');

exports.createProfileInfo = async (req, res) => {
  const { profileName, profileTitle, profileAvatar, profileLanguage } = req.body;
  try {
    const createProfileInfo = await ProfileInfo.create({ profileName: profileName, profileTitle: profileTitle, profileAvatar: profileAvatar, profileLanguage: profileLanguage });
    res.status(201).json({ message: 'Profile created success!', createProfileInfo: createProfileInfo });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getProfileInfo = async (req, res) => {
  const { profileLanguage } = req.body;
  console.log(profileLanguage);
  try {
    const profileInfo = await ProfileInfo.findOne({ profileLanguage: profileLanguage });
    console.log(profileInfo);
    res.status(200).json({ message: 'Profile found success!', profileInfo: profileInfo });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};