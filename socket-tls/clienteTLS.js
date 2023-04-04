const tls = require('node:tls');
const fs = require('node:fs');

const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('public-cert.pem'),
  
    // This is necessary only if using client certificate authentication.
    requestCert: false,
    rejectUnauthorized: false,
};

const cliente = tls.connect(4000, 'localhost', options, () => {
    console.log('Cliente conectado');
});