import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Página para crear una nueva reunión
import JoinMeeting from './pages/MeetingLogin';
import Meeting from './pages/Meeting';
import CalendarTester from './pages/CalendarTester';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <div className="app-container">
    <Router>
      <Navbar/>
      <main className="content">
      <Routes>
        {/* Ruta para crear una nueva reunión */}
        <Route path="/" element={<Home />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/calendar" element={<CalendarTester />} />
        <Route path="/about" element={<About />} />

        {/* Ruta para unirse a una reunión con un hash */}
        <Route path="/meeting/:hash" element={<JoinMeeting />} />
      </Routes>
      </main>
      <Footer/>
    </Router>
    </div>
  );
};

export default App;