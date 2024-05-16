# Use a imagem oficial do Node.js como base
FROM node:14

# Crie o diretório de trabalho
WORKDIR /app

# Copie o package.json e package-lock.json
COPY package.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

# Construa a aplicação React
RUN npm run build

# Instale o servidor estático para servir a aplicação
RUN npm install -g serve

# Exponha a porta em que a aplicação irá rodar
EXPOSE 16001

# Comando para rodar a aplicação
CMD ["serve", "-s", "build", "-l", "16001"]
