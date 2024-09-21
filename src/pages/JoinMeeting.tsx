import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const JoinMeeting: React.FC = () => {
  const { hash } = useParams<{ hash: string }>(); // Captura el hash desde la URL
  const [name, setName] = useState<string>(''); // Estado para el nombre
  const [email, setEmail] = useState<string>(''); // Estado para el email

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '') {
      alert('Por favor, ingresa tu nombre y correo');
      return;
    }

    // Aquí debes enviar los datos al servidor o realizar la lógica para unirse a la reunión
    console.log(`Unirse a la reunión con hash: ${hash}, nombre: ${name}, correo: ${email}`);
  };

  return (
    <div>
      <h1>Unirse a la reunión</h1>
      <form onSubmit={handleJoin}>
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

        <button type="submit">Unirse a la reunión</button>
      </form>
    </div>
  );
};

export default JoinMeeting;
