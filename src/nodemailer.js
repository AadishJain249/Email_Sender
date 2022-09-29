require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const demo=require('../template')
// These id's and secrets should come from .env file.
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
async function sendMail(email) {
  try {
    const oAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
    );
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    const accessToken = await oAuth2Client.getAccessToken();
    console.log(accessToken);
    const transport = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL, // your mail id
      to: email, // recevier mail
      subject: 'Mail',
      text: 'Welcome here!',
      html: demo(email),
    };
    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}
// sendMail()
  // .then((result) => console.log('Email sent...', result))
  // .catch((error) => console.log(JSON.stringify(error.message)))
  module.exports = {
    sendMail
  };
  