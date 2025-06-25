// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Index from './pages';
import Protfolio from './pages/protfolio';
import Contact from './pages/contact';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/portfolio" element={<Protfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;