import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [name, setName] = useState<string>(''); // Estado para el nombre del usuario
  const [email, setEmail] = useState<string>(''); // Estado para el email del usuario
  const navigate = useNavigate(); // Hook para redirigir a otra página

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (name.trim() === '') {
      alert('Por favor, ingresa tu nombre');
      return;
    }

    // Validación básica del email
    if (!email.includes('@') || !email.includes('.')) {
      alert('Por favor, ingresa un correo electrónico válido');
      return;
    }

    // Aquí puedes realizar alguna acción como guardar el nombre y el correo, o pasarlos a otra página
    navigate('/welcome', { state: { userName: name, userEmail: email } }); // Ejemplo de redirección
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <h2>Bienvenido</h2>

        {/* Campo para el nombre */}
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingresa tu nombre"
          style={{ padding: '8px', margin: '10px 0' }}
        />

        {/* Campo para el correo electrónico */}
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu correo electrónico"
          style={{ padding: '8px', margin: '10px 0' }}
        />

        {/* Botón de enviar */}
        <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>
          New Meeting
        </button>
      </form>
    </div>
  );
};

export default Home;
