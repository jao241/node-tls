Desenvolvedores: João Vitor Lima Lago Santos e Paulo Estevão

Situação: Implemente, em linguagem de programação de sua preferência, uma conexão segura entre duas máquinas distintas usando SSL ou TLS e que seja capaz de transferir uma imagem .jpg qualquer.

# Passo a passo para execução do projeto:

-> Pre requisitos:
 -- Node (Versão 18+)

Obs: Pode ocorrer um erro de importações não encontradas nas versões anteriores a citada acima.

-> Forma de execução:

1° Abra o wireshark e comece a monitorar a rede

2° Abra o terminal e execute o seguinte comando:
 -- npm run servidor

O comando acima executa o servidor-tls socket

3° Abra o terminal e execute o seguinte comando:
 -- npm run cliente 

O comando acima executa o cliente-tls socket

A partir dai já é possivel visualizar o fluxo de dados pelo wireshark, para melhor visualização filtre os dados por 'tls' que exibirá os dados específicos do tipo.

Obs: Caso ocorra algum erro com um certificado, é possivel emitir um novo por meio dos comandos presentes no arquivo 'Comandos openssl.txt', presente na raiz do projeto (Deve-se realizar todo o fluxo do arquivo, pois uma chave nova precisa de um certificado autenticado correspondente).

Obs: Os arquivos presentes na pasta socket são uma forma simples de conexão socket sem criptografica utilizando o UDP.