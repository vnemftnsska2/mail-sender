// Mailer
const nodemailer = require('nodemailer');

// env
require("dotenv").config();

// OutLook
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  secureConnection: false,
  port: 587,
  tls: {
    ciphers:'SSLv3'
  },
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PW,
  }
});

const mailOptions = {
  from: `"Our Code World " <${process.env.USER_EMAIL}>`,
  to: 'vnemftnsska2@naver.com,',
  subject: 'Hello ',
  text: 'Hello world ',
  html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js',
  attachments: [
    {
      path: './attach_files/moon_kyungwon.pdf'
    },
  ],
};

transporter.sendMail(mailOptions, function(error, info){
  if(error){
    return console.log(error);
  }
  console.log('Message Sent:', info.response);
});