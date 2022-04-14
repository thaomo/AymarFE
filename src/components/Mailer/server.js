require('dotenv').config();

const nodemailer = require('nodemailer');

// step 1

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    }
});


// Step 2

let mailOptions = {
    from: 'ricofoundation2021@gmail.com',
    to: 'ricofoundation2021@gmail.com',
    subject: 'Testing!',
    text: 'Testing Works!'

};


// Step 3

transporter.sendMail(mailOptions, function(err, data){
    if (err){
        console.log('Error Occurred', err);
    } else {
        console.log('Email Sent!');
    }
});