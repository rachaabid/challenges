const express = require('express');
const router = express.Router();
const {sendSimpleMail, sendHtmlMail, sendEjsMail} = require('../controlers/email.controlers');

router.get('/send-simple-mail', sendSimpleMail);

router.get('/send-html-mail', sendHtmlMail);

router.get('/send-ejs-mail', sendEjsMail);

module.exports = router;



