import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Sicily from './pages/Sicily.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations/sicily" element={<Sicily />} />
    </Routes>
  );
}
