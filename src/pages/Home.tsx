import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateMeeting = () => {
    // Aquí deberías generar la nueva reunión y redirigir al usuario a la página de esa reunión
    const newMeetingId = "some-generated-id"; // Este ID lo generas desde tu backend o lógica
    navigate(`/meeting/${newMeetingId}`);
  };

  return (
    <div>
      <h1>Crear una nueva reunión</h1>
      <button onClick={handleCreateMeeting}>Crear Reunión</button>
    </div>
  );
};

export default Home;