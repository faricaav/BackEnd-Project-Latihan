var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: 'faricavashti15@gmail.com',
        pass: 'hflwhcatmolbzhmn'
    },
    tls: {
        rejectUnauthorized: false
    }
});

var mailOptions = {
    from: '"Farica Vashti" <foo@example.com>', // sender address
    to: "wadic58714@pubpng.com", // list of receivers
    subject: "Hello, This is Sending Email using Node.js", // Subject line
    text: "Hello world?", // plain text body
    html: '<b>Hello world?</b> <br> See This Image: <br> <img src="cid:unique"/>', // html body
    attachments: [{
        filename: 'logo192.png',
        path: 'photo attach.png',
        cid: 'unique' //same cid value as in the html img src
    }]
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});