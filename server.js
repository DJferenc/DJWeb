// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// E-mail küldő beállítások
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Használhatsz más szolgáltatót is, pl. Yahoo, Outlook, stb.
    auth: {
        user: 'your_email@gmail.com', // A te Gmail címed
        pass: 'your_email_password' // A jelszavad
    }
});

// Regisztrációs végpont
app.post('/register', (req, res) => {
    const { username, email } = req.body;

    const mailOptions = {
        from: 'your_email@gmail.com',
        to: email,
        subject: 'Sikeres Regisztráció',
        text: `Kedves ${username},\n\nSikeresen regisztráltál a DJ Webre!`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Hiba történt az e-mail küldése során.');
        }
        res.status(200).send('Regisztrációs e-mail elküldve!');
    });
});

// Szerver indítása
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Szerver fut a ${PORT} porton.`);
});
