import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState({ server: "Vérification...", db: "Vérification..." });
  const [error, setError] = useState(null);

  useEffect(() => {
    // On appelle l'API Flask sur le port 5000
    axios.get('http://localhost:5000/status')
      .then(response => {
        setStatus({
          server: response.data.status,
          db: response.data.database
        });
      })
      .catch(err => {
        console.error("Erreur Backend:", err);
        setError("Le Backend ne répond pas. Vérifie Docker !");
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>🚀 Open-WhatsApp - Module 1</h1>
      {error ? (
        <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>
      ) : (
        <div style={{ border: '2px solid green', display: 'inline-block', padding: '20px', borderRadius: '10px' }}>
          <p>Serveur Flask : <strong>{status.server}</strong> ✅</p>
          <p>Base PostgreSQL : <strong>{status.db}</strong> ✅</p>
        </div>
      )}
    </div>
  );
}

export default App;