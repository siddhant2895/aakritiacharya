import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const sectionLinks = [
  { id: 'about', label: 'About' },
  { id: 'destinations', label: 'Destinations' },
  { id: 'journal', label: 'Journal' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ onNavigateSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  const closeMenu = () => setIsMenuOpen(false);

  const handleSectionClick = (sectionId) => {
    closeMenu();
    if (location.pathname === '/' && typeof onNavigateSection === 'function') {
      onNavigateSection(sectionId);
    } else {
      navigate('/', { state: { target: sectionId } });
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" onClick={closeMenu} className="logo">
        Aakriti Acharya
      </Link>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {sectionLinks.map((link) => (
          <li key={link.id}>
            <button
              type="button"
              className="nav-button"
              onClick={() => handleSectionClick(link.id)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
