const crypto = require('crypto');
const nodemailer = require('nodemailer');
const path = require('path');
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, './env') });

const emailApp = Buffer.from(process.env.email);
const passwordApp = Buffer.from(process.env.pass);

const GenerateShipment = (email, codigo) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailApp,
            pass: passwordApp
        }
    });

    const emailOption = {
        from: 'Estudio Salvaje',
        to: email,
        subject: 'Codigo de seguridad',
        text: 'El codigo es valido por 30 segundos',
        html: `<h1> Tu codigo de seguridad </h1> 
                    <h2>${codigo}<h2>`
    };

    transport.sendMail(emailOption, (err, inf) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('El codigo a sido enviado');
        }
    });
};
const GenerateCode = () => {
    const codigo = crypto.randomInt(100000, 999999).toString();
    return codigo;
};
const SendCode = (email) => {
    const generateCode = GenerateCode();
    GenerateShipment(email, generateCode);
    return generateCode;
};

module.exports = SendCode;