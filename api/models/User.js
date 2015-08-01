/**
* User.js
*
* @description :: TODO: User model for Fresh farms

* @docs        :: http://sailsjs.org/#!documentation/models
*/


var bcrypt = require('bcrypt');
var uuid = require('node-uuid');
var SALT_WORK_FACTOR = 10;
module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 30
    },
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true,
      minLength: 8,
      maxLength: 50
    },
    address: {
      type: 'string',
      required: true
    },
    role: {
      type: 'array',
      required: true,
      enum: ['creator', 'admin', 'language', 'translation', 'content', 'readonly']
    }
  },

  verifyPassword: function (password) {
    return bcrypt.compareSync(password, this.password);
  },

  changePassword: function(newPassword, cb){
    this.newPassword = newPassword;
    this.save(function(err, u) {
      return cb(err,u);
    });
  },

  toJSON: function() {
    var obj = this.toObject();
    return obj;
  },

  beforeCreate: function (attrs, cb) {
    bcrypt.hash(attrs.password, SALT_WORK_FACTOR, function (err, hash) {
      attrs.password = hash;
      return cb();
    });
  },

  beforeUpdate: function (attrs, cb) {
    if(attrs.newPassword){
      bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return cb(err);

        bcrypt.hash(attrs.newPassword, salt, function(err, crypted) {
          if(err) return cb(err);

          delete attrs.newPassword;
          attrs.password = crypted;
          return cb();
        });
      });
    }
    else {
      return cb();
    }
  }
};
