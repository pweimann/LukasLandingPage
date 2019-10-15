const express = require('express');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
console.log('node.js application starting...');

// View engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact-me', (req, res) => {
    res.render('contact-me');
});

app.post('/contactus', function (req, res) {
    var mailOpts, smtpTrans;
    //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
    smtpTrans = nodemailer.createTransport('SMTP', {
        service: 'Gmail',
        auth: {
            user: "weimannp2@gmail.com",
            pass: "Meinemama2009"
        }
    });
    //Mail options
    mailOpts = {
        from: req.body.name + req.body.email,
        to: 'bluubsen@gmail.com',
        subject: req.body.email + '  --Msg from contactus-form',
        text: "Name: " + req.body.name + "Email: " + req.body.email +
            "Contact No:  " + req.body.contactNo + "QUERY: " + req.body.message
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
        //Alert on event of message sent succeeds or fail.
        if (error) {
            res.render('contactus', {msg: 'Error occured, message not sent.', err: true});
        } else {
            res.render('contactus', {msg: 'Message sent! Thank you.', err: false});
        }
        smtpTrans.close();
    });
});

app.listen(3000, () => console.log('Server started...'));