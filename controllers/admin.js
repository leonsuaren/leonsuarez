const Admin = require('../models/admin');

exports.createAdmin = async (req, res) => {
  const { adminName, password } = req.body;
  try {
    const admin = await Admin.create({ adminName, password });
    res.status(201).json({ message: 'Admin created success', admin: admin });
  } catch (error) {
    res.status(404).json({ error: error });
  }
}

exports.adminLogin = async (req, res) => {
  const { adminName, password } = req.body;
  try {
    const admin =  await Admin.findOne({ adminName }).select("+password");
    const isMatch = await admin.matchPasswords(password);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(404).json({ token: null, message: "Invalid Password", user: null });
    }
    const token = admin.getSignedToken();
    res.status(200).json({ token: token, message: 'Login Success', admin: admin });
  } catch (error) {
    res.status(404).json({ error: error });
  }
}