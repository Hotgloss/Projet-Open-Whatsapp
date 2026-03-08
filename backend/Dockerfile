# Utilise Python au lieu de Node
FROM python:3.10-slim

WORKDIR /app

# Copie le fichier des dépendances Python
COPY requirements.txt .

# Installe les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Copie tout le reste du code (le dossier app, run.py, etc.)
COPY . .

# Expose le port (souvent 5000 pour Flask ou 8000 pour FastAPI)
EXPOSE 5000

# Commande pour lancer ton application Python
CMD ["python", "run.py"]    