from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app) # Autorise le Frontend à parler au Backend 

# Configuration de la DB
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

@app.route('/status', methods=['GET'])
def status():
    return jsonify({"status": "online", "database": "connected"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)