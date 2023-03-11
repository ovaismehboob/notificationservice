const nodemailer = require('nodemailer');
var smtpConfig = {
    host: 'smtp4dev',
    port: 25,
    secure: false,
};
const transport = nodemailer.createTransport(smtpConfig);

exports.sendEmail = function (toAddress, subject, msgBody, result) {

    let mailOptions = {
        from: 'donotreply@oasworkshop.com',
        to: toAddress,
        subject: subject,
        html: msgBody,
    };

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return result(error, null);
        }
        return result(null, "Message sent");
    });
};
