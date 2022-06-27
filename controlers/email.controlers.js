const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

exports.sendSimpleMail = (req, res) => {
  try {
    let info = ({
      from: '"RACHA" <req.body.email>', // sender address
      to: "rachabnabid@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello c'est nodemailer", // plain text body
    });
    transporter.sendMail(info, function (err, success) {
      if (err) {
        console.log(err);
        res.status(500).send({ message: 'internal server error' });
      }
      else {
        console.log("email sent successfuly");
        res.send({ message: 'email sent successfuly' });
      }
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured while creating user'
    })
  }
}

exports.sendHtmlMail = async (req, res) => {
  try {
    let info = ({
      from: '"RACHA" <req.body.email>', // sender address
      to: "rachabnabid@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      html: '<h1>Hello Node</h1>',
    });
    await transporter.sendMail(info);
    console.log("email sent successfuly");
    res.send({ message: 'email sent successfuly' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured while creating user'
    })
  }
}

exports.sendEjsMail = async (req, res) => {
  try {
    const filePath = path.resolve('./views/home.ejs');
    const template = fs.readFileSync(filePath, {encoding: 'utf-8'});
    const options = {name: 'racha'};
    const render = ejs.render(template, options);
    let info = ({
      from: '"RACHA" <req.body.email>', // sender address
      to: "rachabnabid@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      html: render,
      attachments: [
        {   // utf-8 string as an attachment
            filename: 'text1.txt',
            content: 'hello world!'
        }],
    });
    await transporter.sendMail(info)
    console.log("email sent successfuly");
    res.send({ message: 'email sent successfuly' });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message || 'some error occured while creating user'
    })
  }
}