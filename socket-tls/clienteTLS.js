const tls = require('node:tls');
const fs = require('node:fs');

const options = {
    // Client private key
    key: fs.readFileSync('certificates/client/private-client-key.pem'),

    // Client public certificate
    cert: fs.readFileSync('certificates/client/certificate-cert.pem'),

    // This is necessary only if the client uses a self-signed certificate.
    ca: [ fs.readFileSync('certificates/server/certificate-cert.pem') ]
};

const cliente = tls.connect(4000, 'localhost', options, () => {
    console.log('Cliente conectado');
}); 

cliente.setEncoding('utf8');

cliente.on('data', (data) => {
    console.log(data);
});