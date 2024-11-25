import crypto from 'crypto'

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY??'default_encryption_key_32'
const IV_LENGTH = 16

if (!ENCRYPTION_KEY) {
    throw new Error('ENCRYPTION_KEY environment variable is not set');
}

export function encrypt(text: string): string {
    const iv = crypto.randomBytes(IV_LENGTH)
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv)
    let encrypted = cipher.update(text)
    encrypted = Buffer.concat([encrypted, cipher.final()])
    return iv.toString('hex') + ':' + encrypted.toString('hex')
}

export function decrypt(encryptedText: string): string {
    const textParts = encryptedText.split(':')
    const iv = Buffer.from(textParts.shift()!, 'hex')
    const encryptedTextBuffer = Buffer.from(textParts.join(':'), 'hex')
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv)
    let decrypted = decipher.update(encryptedTextBuffer)
    decrypted = Buffer.concat([decrypted, decipher.final()])
    return decrypted.toString()
}

// CLI interface implementation to be able to access these two functions from CLI
if (require.main === module) {
    const [,, command, text] = process.argv

    if (!command || !text) {
        console.error('Usage: node encryption.js <encrypt|decrypt> <text>')
        process.exit(1)
    }

    if (command === 'encrypt') {
        console.log('Encrypted Text:', encrypt(text))
    } else if (command === 'decrypt') {
        console.log('Decrypted Text:', decrypt(text))
    } else {
        console.error('Invalid command. Use "encrypt" or "decrypt".')
        process.exit(1)
    }
}