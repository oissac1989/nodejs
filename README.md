
# NodeJs API

_Projeto desenvolvido no Bootcampo da Rocketseat NLW-Unite_

Este projeto consiste em uma API desenvolvida em Node.js para gerenciar participantes de eventos. Através desta API, é possível cadastrar eventos, visualizar informações sobre eles, cadastrar participantes, listar participantes cadastrados, associar participantes a eventos e realizar o check-in dos participantes nos eventos que estão cadastrados.

## Tecnologias Utilizadas

- **WSL (Windows Subsystem for Linux)**: Utilizado para criar um ambiente de desenvolvimento compatível com o Linux no Windows.
- **NVM (Node Version Manager)**: Gerenciador de versões do Node.js, permitindo a instalação e utilização de diferentes versões do Node.js em um mesmo sistema.
- **Typescript (TSX)**: Superset do JavaScript que adiciona tipagem estática ao código, aumentando a robustez e facilitando a manutenção do projeto.
- **Fastify**: Framework web para Node.js, conhecido por sua velocidade e eficiência na construção de APIs.
- **Prisma ORM**: ORM (Object-Relational Mapping) utilizado para interagir com o banco de dados de forma simplificada e segura, utilizando TypeScript.
- **Zod**: Biblioteca para validação de esquemas de dados em TypeScript, garantindo a consistência e integridade dos dados manipulados pela API.


## Como Utilizar

### Pré-requisitos

- Node.js
- NPM


### Comando úteis

- Clone este repositório:

   ```bash
   git clone https://github.com/oissac1989/nodejs.git
   ```

- Navegue até o diretório do projeto:

   ```bash
   cd nodejs
   ```


### Configuração do Banco de Dados

1. Instalação do ORM Prisma:

   ```bash
   npm install prisma
   ```

2. Criação das tabelas:

	```bash
	npm run db:migrate
	```


### Execução

1. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```
   
OU


1. Build da aplicação em JS

	```bash
	npm run build
	```

2. Start da aplicação

	```bash
	npm run start
	```
   

- A API estará disponível em `http://localhost:3333`.

### Testes

Em desenvolvimento

## Documentação da API

A documentação detalhada dos endpoints disponíveis nesta API está disponível [Aqui](https://nlw-unite-nodejs.onrender.com/docs).
