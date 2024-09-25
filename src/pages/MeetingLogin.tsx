import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MeetingLogin: React.FC = () => {
  const { hash } = useParams<{ hash: string }>(); // Captura el hash de la URL
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Por favor, ingresa tu nombre y correo.');
      return;
    }

    // Simula el inicio de sesión (aquí podrías agregar lógica para manejar autenticación)
    console.log(`Nombre: ${name}, Email: ${email}, Hash: ${hash}`);

    // Redirigir a la página de la reunión con el hash
    navigate(`/meeting/${hash}`, { state: { name, email } });
  };

  return (
    <div>
      <h1>Unirse a la reunión</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingresa tu nombre"
        />

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu correo"
        />

        <button type="submit">Entrar a la reunión</button>
      </form>
    </div>
  );
};

export default MeetingLogin;
