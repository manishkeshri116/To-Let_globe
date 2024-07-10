const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'manishkeshri116@gmail.com',
    pass: 'write your passwoard'
  }
});

module.exports = transporter;
