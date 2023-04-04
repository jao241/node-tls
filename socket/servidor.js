const dgram = require('node:dgram');

const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('Servidor funcionando'));

server.on('message', (msg, rinfo) => {
    console.log(`${msg}`);
    console.log(rinfo);

    server.send('mensagem recebida', rinfo.port, rinfo.address, (error) => {
        if (error) console.error(error);
        else server.close();
    })
});

server.bind(4000, 'localhost');