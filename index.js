// Don't worry, the private key in this project is just a one-off. It's not sensitive and can be public.

// Generate a private key like this:
// ssh-keygen, fill out the info, name the file private.key, don't put a passphrase
// Don't use the .pub file as the public key, it's not what you want. Do this:
// openssl rsa -in private.key -pubout > public.key


const jwt = require('jsonwebtoken')
const fs = require('fs')
const privateKey = fs.readFileSync('./private.key');
var secret = new Buffer(privateKey, "base64");
const publicKey = fs.readFileSync('./public.key')

const token = jwt.sign({ a: 'b' }, privateKey, { algorithm: 'RS256' })
console.log('-------------- token', token);
const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256']})
console.log('-------------- decoded', decoded);