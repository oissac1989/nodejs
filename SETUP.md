# CONFIGURAÇÃO DO AMBIENTE WIN/WSL (Ubuntu)

### instalar o zsh-nvm para utilziar a nvm no WSL
    
    git clone https://github.com/lukechilds/zsh-nvm.git ~/.zsh-nvm
    
    source ~/.zsh-nvm/zsh-nvm.plugin.zsh
    
### Instalar o NVM (Gerenciador de versões do NodeJs - https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

    source .bashrc

### Instalar a ultima versão LTS do NodeJs
    nvm install --lts

### Iniciar o projeto NodeJs
    npm init -y

### Instalar o typescript para trabalhar com o NodeJs em mode de desenvolvimento(-D)
    npm i typescript @types/node -D

### Criar as configurações do Typescript
    npx tsc --init

acessar os dados base do tsconfig no git (https://github.com/tsconfig/bases) e colar as configurações de acordo com a versão do Node.

Executar o projeto no modo Dev

    npm run dev


## FERRAMENTAS DE DESENVOLVIMENTO

### TSX 
- Conversor dos arquivos Typescript para JavaScript
    
        npm install tsx -D

### FASTIFY 
- Micro Framework para criação de rotas http
    
        npm install fastify

    Biblioteca do Swagger
        
        npm i @fastify/swagger
        
        npm i @fastify/swagger-ui

    Biblioteca de controle de dominios
        
        npm i @fastify/cors

### PRISMA 
- ORM de conexão com Banco de Dados
    
        npm install prisma -D

    Inicializar o prisma
        
        npx prisma init --datasource-provider SQLite

    Criar o database
        
        npx prisma migrate dev

    Criar um primeiro registro de evento no BD para testes
        
        npx prisma db seed

    Iniciar o Prisma studio (http://localhost:5555/)
     
        npx prisma studio

### ZOD 
- Biblioteca de validação (https://github.com/turkerdev/fastify-type-provider-zod)
    
        npm install fastify-type-provider-zod

### TSUP
- Biblioteca de conversão de Typescript para JavaScript
    
        npm i tsup -D
    
    Converter os ts p/ js
    
        npm rum build