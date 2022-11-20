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
    if (!admin) {
      return res.status(404).json({ token: null, message: "Invalid Name", user: null, success: false });
    }
    const isMatch = await admin.matchPasswords(password);
    if (!isMatch) {
      return res.status(404).json({ token: null, message: "Invalid Password", user: null, seuccess: false });
    }
    const token = admin.getSignedToken();
    res.status(200).json({ token: token, message: 'Login Success' });
  } catch (error) {
    res.status(404).json({ error: error });
  }
}