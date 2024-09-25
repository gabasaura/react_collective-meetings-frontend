import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Página para crear una nueva reunión
import JoinMeeting from './pages/MeetingLogin';
import Meeting from './pages/Meeting';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta para crear una nueva reunión */}
        <Route path="/" element={<Home />} />
        <Route path="/meeting" element={<Meeting />} />

        {/* Ruta para unirse a una reunión con un hash */}
        <Route path="/meeting/:hash" element={<JoinMeeting />} />
      </Routes>
    </Router>
  );
};

export default App;