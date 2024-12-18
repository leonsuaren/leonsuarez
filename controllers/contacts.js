const Contacts = require('../models/contact');

exports.createContact = async (req, res) => {
  const { contactName, contactEmail, contactNumber, contactMessage } = req.body;
  const contacts = await Contacts.onCreateContact(contactName, contactEmail, contactNumber, contactMessage);
  try {
    res.status(200).json({ contacts: contacts });
  } catch (error) {
    res.status(404).json({ error: error })
  }
}