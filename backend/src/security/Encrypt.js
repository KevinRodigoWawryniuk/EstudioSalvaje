const crypto = require('crypto');
const path = require('path');
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, './env') });

const algorithm = 'aes-256.cbc';
const key = Buffer.from(process.env.secretkey, 'hex');
const iv = Buffer.from(process.env.iv, 'hex');

const Encrypt = (text) => {
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}
const Decrypt = (text) => {
    const textPart = text.split(':');
    const iv = Buffer.from(textPart.shift(), 'hex');
    const encryptedText = Buffer.from(textPart.join(':'), 'hex');
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
module.exports = [Encrypt, Decrypt];