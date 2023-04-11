const tls = require("node:tls");
const fs = require("node:fs");

const options = {
  // Server private key
  key: fs.readFileSync("certificates/server/private-server-key.pem"),

  // Server public certificate
  cert: fs.readFileSync("certificates/server/certificate-cert.pem"),

  // This is necessary only if using client certificate authentication.
  requestCert: true,

  // This is necessary only if the client uses a self-signed certificate.
  ca: [fs.readFileSync("certificates/client/certificate-cert.pem")],
};

const servidor = tls.createServer(options, (socket) => {
  const autorizado = socket.authorized;

  if (autorizado) {
    socket.write(fs.readFileSync('exemplo.jpeg'));
    socket.setEncoding("utf8");
    socket.pipe(socket);
    
    console.log("Mensagem enviada!");
  }
});

servidor.listen(4000, "localhost", () => console.log("Servidor iniciado!"));
