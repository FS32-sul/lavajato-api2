# Dockerfile para a API Lavajato
FROM node:20-slim

# Definindo diretório de trabalho
WORKDIR /usr/src/app

# Copiando arquivos de dependências primeiro para aproveitar cache do Docker
COPY package.json package-lock.json* ./

# Instalando dependências
RUN npm install --production

# Copiando o código-fonte da aplicação
COPY . .

# Expondo a porta usada pela aplicação
EXPOSE 8000

# Comando padrão para iniciar o servidor
RUN npm run dev
