import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createMeeting } from '../actions/meetingActions'; // Import the function to handle the API call

const Home: React.FC = () => {
  const [title, setTitle] = useState(''); // State for meeting title
  const [creatorName, setCreatorName] = useState(''); // State for creator name
  const [creatorEmail, setCreatorEmail] = useState(''); // State for creator email
  const [meetDescription, setMeetDescription] = useState(''); // State for creator email
  const navigate = useNavigate();

  const handleCreateMeeting = async () => {
    try {
      const meetingData = {
        title: 'New Meeting',
        creator_name: 'Your Name',
        creator_email: 'youremail@example.com',
        description: 'Description of the meeting',
      };
  
      const newMeeting = await createMeeting(meetingData); // Llama a la función que crea la reunión
  
      if (!newMeeting || !newMeeting.id) {
        throw new Error('Meeting creation failed: No ID returned');
      }
  
      const id = newMeeting.id;  // Extrae el ID de la reunión creada
      navigate(`/meeting/${id}`);  // Navega a la página de la reunión con el ID
    } catch (error) {
      console.error('Error creating meeting:', error);
    }
  };

  return (
    <div>
      <h1>Crear una nueva reunión</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleCreateMeeting(); }}>
        <div>
          <label>Título de la reunión:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update title state
            required
          />
        </div>
        <div>
          <label>Nombre del creador:</label>
          <input
            type="text"
            value={creatorName}
            onChange={(e) => setCreatorName(e.target.value)} // Update creatorName state
            required
          />
        </div>
        <div>
          <label>Correo electrónico del creador:</label>
          <input
            type="email"
            value={creatorEmail}
            onChange={(e) => setCreatorEmail(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Descripcion reunion:</label>
          <input
            type="textarea"
            value={meetDescription}
            onChange={(e) => setMeetDescription(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Crear Reunión</button>
      </form>
    </div>
  );
};

export default Home;
