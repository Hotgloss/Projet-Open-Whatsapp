# Utilise une image Node stable
FROM node:20-alpine

WORKDIR /app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste du code
COPY . .

# Expose le port par défaut de Vite
EXPOSE 5173

# Commande pour lancer Vite en mode développement avec accès externe
CMD ["npm", "run", "dev", "--", "--host"]