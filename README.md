# Hackazuque

**Contrato de Custódia Ethereum**

Este é um contrato inteligente de custódia implementado na blockchain Ethereum que permite que duas partes transacionem de forma segura e confiável. O contrato mantém os fundos do comprador até que as condições de liberação sejam cumpridas.

**Pré-requisitos**

Antes de começar, certifique-se de ter o seguinte instalado:

1. Node.js
2. npm ou yarn

**Instalação**

1. Clone o repositório e acesse a pasta do projeto.

git clone https://github.com/thomasfbrand/Hackazuque
cd Hackazuque

2. Instale as dependências.

npm install ou yarn install

**Funcionalidades**

Criação de contratos de garantia de pagamento para transferência de BTG-DOL entre duas partes;
Criação de contratos através de uma interface web simples e amigável;
Visualização dos contratos criados;
Acompanhamento do status de cada contrato (pendente de pagamento, pendente de entrega, completo ou cancelado);
Recebimento de notificações por e-mail sobre o status do contrato;
Cancelamento do contrato em caso de desacordo entre as partes ou outros motivos.

**Tecnologias utilizadas**

Solidity: linguagem de programação para contratos inteligentes na rede Ethereum;
React: biblioteca JavaScript para construção de interfaces de usuário;
Web3.js: biblioteca JavaScript para interação com a rede Ethereum;
Ethers.js: biblioteca JavaScript para interação com a rede Mumbai;
OpenZeppelin: biblioteca de contratos inteligentes reutilizáveis e seguros para Ethereum;

**Como executar a aplicação**

1. Clone este repositório em sua máquina;
2. Acesse o diretório raiz do projeto e instale as dependências do projeto através do comando npm install ou yarn install;
3. Inicie o Ganache e crie uma nova rede;
4. Faça o deploy dos contratos para a rede criada;
5. Acesse a pasta client (cd client) e inicie a aplicação através do comando npm start;
6. Acesse http://localhost:3000 no seu navegador para utilizar a aplicação.

**Como criar um contrato**

1. Acesse a interface da aplicação através do endereço http://localhost:3000;
2. Preencha o endereço da carteira do comprador, o endereço da carteira do vendedor, a quantidade de tokens a ser transferida e a data de liberação dos tokens;
3. Clique no botão que gera um contrato;
4. Confira os dados do contrato e confirme a criação do mesmo.

**Como visualizar os contratos criados**

1. Acesse a interface da aplicação através do endereço http://localhost:3000;
2. Na página inicial, serão exibidos todos os contratos criados;
3. Clique em um contrato para visualizar mais detalhes sobre o mesmo.

**Conclusão**

O Smart Contract de Escrow é uma solução confiável e segura para realizar transações de compra e venda de bens digitais ou físicos. Ele garante que ambas as partes cumpram com seus compromissos, aumentando a confiança entre as partes envolvidas.

Neste projeto, utilizamos a plataforma Mumbai e a linguagem de programação Solidity para criar nosso contrato inteligente. Além disso, utilizamos o framework React e a biblioteca ethers.js para criar uma interface de usuário que permite a criação de contratos Escrow de forma simples e intuitiva.

Esperamos que este projeto tenha sido útil e que possa servir como base para o desenvolvimento de soluções semelhantes.