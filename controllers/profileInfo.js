const ProfileInfo = require('../models/profileInfo');

exports.createProfileInfo = async (req, res) => {
  const { profileName, profileTitle, profileAvatar, profileLanguage, profileEmail, profileNumber } = req.body;

  const userExist = await ProfileInfo.find({ $or: [{profileEmail}, {profileName}] });

  if (userExist) {
    return res.status(404).json({ message: 'Profile already exist!' })
  }

  try {
    const createProfileInfo = await ProfileInfo.create({ profileName, profileTitle, profileAvatar, profileLanguage, profileEmail, profileNumber });
    return res.status(201).json({ message: 'Profile created success!', createProfileInfo: createProfileInfo });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

exports.getProfileInfo = async (req, res) => {
  const { profileLanguage } = req.body;
  try {
    const profileInfo = await ProfileInfo.findOne({ profileLanguage: profileLanguage });
    res.status(200).json({ message: 'Profile found success!', profileInfo: profileInfo });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.updateProfileInfo = async (req, res) => {
  const { profileName, profileTitle, profileNumber, profileEmail, profileLanguage } = req.body;
  try {
    await ProfileInfo.updateOne({ profileLanguage: profileLanguage },
      { $set: { profileName: profileName, profileTitle: profileTitle, profileNumber: profileNumber, profileEmail: profileEmail } }
    );
    const newProfileInfo = await ProfileInfo.findOne({ profileName: profileName });
    res.status(204).json({ message: 'Profile updated success!', newProfileInfo: newProfileInfo });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}