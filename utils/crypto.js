"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = encrypt;
exports.decrypt = decrypt;
var crypto = require('crypto');
var ENCRYPTION_KEY = (_a = process.env.ENCRYPTION_KEY) !== null && _a !== void 0 ? _a : 'default_encryption_key_32';
var IV_LENGTH = 16;
if (!ENCRYPTION_KEY) {
    throw new Error('ENCRYPTION_KEY environment variable is not set');
}
function encrypt(text) {
    var iv = crypto.randomBytes(IV_LENGTH);
    var cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    var encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}
function decrypt(encryptedText) {
    var textParts = encryptedText.split(':');
    var iv = Buffer.from(textParts.shift(), 'hex');
    var encryptedTextBuffer = Buffer.from(textParts.join(':'), 'hex');
    var decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    var decrypted = decipher.update(encryptedTextBuffer);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
// CLI interface implementation to be able to access these two functions from CLI
if (require.main === module) {
    var _b = process.argv, command = _b[2], text = _b[3];
    if (!command || !text) {
        console.error('Usage: node encryption.js <encrypt|decrypt> <text>');
        process.exit(1);
    }
    if (command === 'encrypt') {
        console.log('Encrypted Text:', encrypt(text));
    }
    else if (command === 'decrypt') {
        console.log('Decrypted Text:', decrypt(text));
    }
    else {
        console.error('Invalid command. Use "encrypt" or "decrypt".');
        process.exit(1);
    }
}
