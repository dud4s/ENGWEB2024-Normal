# Use a imagem oficial do Node.js como base
FROM node:16

# Crie o diretório de trabalho
WORKDIR /app

# Copie o package.json e package-lock.json
COPY api/package.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY api/ .

# Exponha a porta em que a aplicação irá rodar
EXPOSE 16000

# Comando para rodar a aplicação
CMD ["npm", "start"]
