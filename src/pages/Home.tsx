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
        title, // Input from form
        creator_name: creatorName,
        creator_email: creatorEmail,
        description: meetDescription,
      };
      const newMeeting = await createMeeting(meetingData); // Call the function to create the meeting
      navigate(`/meeting/${newMeeting.id}`); // Use the meeting ID from the response
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
