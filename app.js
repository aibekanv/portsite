const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const path = require('path')
const nodemailer = require('nodemailer')

const app = express()

//View engine setup
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

//Static folder
app.use('/public', express.static(path.join(__dirname, 'public')))

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req,res)=>{
	res.render('index.html')
})

app.post('/send', (req,res) =>{
	console.log(path)
	const output = `
		<p>New contact request</p>
		<h3>Contact Detail</h3>
		<ul>
			<li>Name: ${req.body.name}</li>
			<li>E-mail: ${req.body.email}</li>
			<li>Text: ${req.body.body}</li>
		</ul>
		<h3>Message</h3>
		<p> ${req.body.message}</p>
	`

	// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'mx1.hostinger.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'aibek@aibekpm.com', // generated ethereal user
            pass: 'password122' // generated ethereal password
        },
        tls:{
        	rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Website visitor" <aibek@aibekpm.com>', // sender address
        to: 'tokhtokhodzhaev@gmail.com', // list of receivers
        subject: 'Visitors message', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        res.render('index.html', {msg: 'E-mail has been sent'})
    });
})

app.listen(3000, ()=>console.log('Server started...'))