import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Sicily from './pages/Sicily.jsx';
import Vienna from './pages/Vienna.jsx';
import Mallorca from './pages/Mallorca.jsx';
import DestinationDetail from './pages/DestinationDetail.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations/sicily" element={<Sicily />} />
      <Route path="/destinations/vienna" element={<Vienna />} />
      <Route path="/destinations/mallorca" element={<Mallorca />} />
      <Route path="/destinations/:destination/:type/:slug" element={<DestinationDetail />} />
    </Routes>
  );
}
