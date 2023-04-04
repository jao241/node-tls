const tls = require('node:tls');
const fs = require('node:fs');

const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('public-cert.pem'),
  
    // This is necessary only if using client certificate authentication.
    requestCert: false,
  
    // This is necessary only if the client uses a self-signed certificate.
    // ca: [ fs.readFileSync('client-cert.pem') ]
};

const servidor = tls.createServer(options, (socket) => {
    console.log('server connected',
    socket.authorized ? 'authorized' : 'unauthorized');  
});

servidor.listen(4000, 'localhost', () => console.log('Servidor iniciado!'));