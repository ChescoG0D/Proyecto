# Usa Node.js 18 como base
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia todo el código restante
COPY . .

# Expone el puerto 5000 (o el que uses)
EXPOSE 5000

# Comando para iniciar el servidor
CMD ["node", "index.js"]
