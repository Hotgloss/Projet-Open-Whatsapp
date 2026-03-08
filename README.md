🚀 Open-WhatsApp - Phase d'Infrastructure (Module 1)

Ce projet est une réplique open-source de WhatsApp utilisant une architecture moderne conteneurisée. Le Module 1 se concentre sur la mise en place de l'environnement de développement avec Docker.
🏗 Architecture du Module 1

Le projet utilise Docker Compose pour orchestrer quatre services essentiels :

    Frontend : React + Vite (Port 5173).

    Backend : Flask API (Port 5000).

    Database : PostgreSQL 15 (Port 5432).

    Adminer : Interface de gestion SQL (Port 8080).

🛠 Prérequis

    Docker Desktop ou Docker Engine installé.

    Docker Compose (inclus dans Desktop).

🚀 Lancement du projet

Pour démarrer l'ensemble de l'infrastructure, exécute la commande suivante à la racine :
Bash

docker-compose up --build

✅ Tests de Validation

Une fois les conteneurs démarrés, vérifie la communication entre les services :

    Frontend : Accède à http://localhost:5173. Tu devrais voir le message de succès Axios indiquant que le Backend et la Database sont connectés.

    API Status : Accède directement à http://localhost:5000/status pour voir la réponse JSON brute du Backend.

    Gestion DB : Accède à http://localhost:8080 pour gérer ta base de données via Adminer.

        Serveur : db

        Utilisateur : user_chat

        Mot de passe : password_chat

📂 Structure des fichiers (Frontend)

Pour que le test Axios fonctionne, la structure doit être respectée scrupuleusement :

    frontend/index.html : Point d'entrée HTML.

    frontend/src/main.jsx : Initialisation de React.

    frontend/src/App.jsx : Logique de test et appel API.

Prochaine Étape : Module 2

Nous allons bientôt implémenter le système d'inscription avec hachage de mots de passe et vérification par code à 6 chiffres.
