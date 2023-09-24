var nodemailer = require('nodemailer');
const x = require('../util/meuSmtp')



var transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: "email-ssl.com.br",
    port: 465,
    secure: true,
    auth: {
        user: 'amilton@cotaadm.com.br',
        pass: x.pass,
    }
});

var mailOptions = {
    from: 'amilton@cotaadm.com.br',
    to: 'amilton0656@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'from node com pass comming from hide file'
};

const Email = (to, subject, text) => transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

module.exports = Email
