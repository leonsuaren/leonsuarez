const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  contactName: {
    type: String,
    require: true
  },
  contactEmail: {
    type: String,
    require: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email"
    ],
    unique: false
  },
  contactNumber: {
    type: Number,
    require: false
  },
  contactMessage: {
    type: String,
    require: true
  }
},
  {
    statics: {
      onCreateContact(contactName, contactEmail, contactNumber, contactMessage) {
        return this.create({ contactName, contactEmail, contactNumber, contactMessage })
      }
    }
  }
);

const Contacts = mongoose.model('Contact', ContactSchema);

module.exports = Contacts;