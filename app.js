const email = require('./email');
const express = require('express');
const app = express();
const port = 3005;

app.use(express.urlencoded());
app.use(express.json());

app.get('/api/notification/healthcheck', (req, res) => res.send('Notification Service is up and running!'));
app.post('/api/notification/sendEmail', (req, res) => {
    console.log("Request Body " + req.body);
    email.sendEmail(req.body.BidUser, "Payment Succeeded - OAS", "Thank you for making a payment for your Auction: " + req.body.IdAuction, function (err, result) {
        if (err) return res.status(500).send('Error occurred while sending email');

        console.log("Result is " + result);
        return res.status(201).json(result);
    });

});

app.listen(port, () => console.log(`Notification Service listening on port ${port}!`));