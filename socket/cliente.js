const dgram = require('node:dgram');

const cliente = dgram.createSocket('udp4');

function realizarConexao() {
    try {
        cliente.connect(4000, 'localhost', () => enviarMensagem('Olá servidor!'));
        console.log('Conexão realizada com o servidor!');
        
    }catch(error) {
        console.warn('Erro ao tentar conectar ao servidor!');
        console.error(error);
    }
}

function enviarMensagem(msg) {
    try {
        cliente.send(msg);
    } catch(error) {
        console.warn('Erro ao enviar a mensagem!');
        console.error(error);
        cliente.close();
    }
}

realizarConexao();

cliente.on('message', (data) => {
    console.log(`${data}`);
    cliente.close();
});

