const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AdminSchema = new mongoose.Schema({
  adminName: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
},
  {
    statics: {
      onCreateAdmin(adminName, password) {
        return this.create({adminName, password});
      },
      onAdminExist(adminName) {
        return this.findOne({adminName});
      },
      onAdminLogin(adminName, password) {
        return this.findOne({adminName}).select("+password");
      }
    }
  }
);

AdminSchema.pre('save', async function(next) {
  if (!this.isModified("password")) {
    next();
  };
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

AdminSchema.methods.getSignedToken = function() {
  return jwt.sign({ id: this._id },'40f20f3b3763dbadd4a94f0d8a6d5210ae90a674b22977f622c4d1ee2641a03a05c2f2' ,{ expiresIn: '20min' });
};

AdminSchema.methods.matchPasswords = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;