import { useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import {
  featuredDestinations,
  journalEntries,
  collaborationLogos,
} from '../data/destinations.js';

export default function Home() {
  const location = useLocation();

  const scrollToSection = useCallback((sectionId) => {
    if (!sectionId) return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    if (location.state?.target) {
      scrollToSection(location.state.target);
    }
  }, [location.state, scrollToSection]);

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleJournalLink = (entry) => {
    if (entry.link.startsWith('#')) {
      scrollToSection(entry.link.replace('#', ''));
    }
  };

  return (
    <div className="page">
      <Navbar onNavigateSection={scrollToSection} />
      <main>
        <Hero
          title={'Slow down. Travel deeper.<br />Experience luxury without the rush.'}
          ctaLabel="Explore"
          ctaHref="#destinations"
          onCtaClick={scrollToSection}
        />

        <section id="about" className="about fade-section">
          <h2>About Me</h2>
          <p>
            Travel, for me, has always been more than simply moving from one destination to another. It is about slowing
            down, immersing deeply into the culture of a place, and experiencing it with all the senses.
          </p>
          <p>
            Over the years, I have partnered with some of the world’s most renowned luxury hotels, boutique stays, and
            tourism boards to curate journeys that combine refined elegance with authenticity.
          </p>
          <p>
            My work blends storytelling, design, and a passion for cultural exploration, inviting travelers to see
            destinations in a more personal and profound way.
          </p>
        </section>

        <section id="destinations" className="destinations fade-section">
          <h2>Signature Destinations</h2>
          <div className="destination-grid">
            {featuredDestinations.map((destination) => {
              const content = (
                <div className="destination-card">
                  <img src={destination.image} alt={destination.name} />
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                </div>
              );

              return destination.link ? (
                <Link to={destination.link} key={destination.name} className="card-link">
                  {content}
                </Link>
              ) : (
                <div key={destination.name}>{content}</div>
              );
            })}
          </div>
        </section>

        <section id="journal" className="journal fade-section">
          <h2>Travel Journal</h2>
          <p className="journal-intro">
            Curated stories that celebrate mindful journeys, cultural immersion, and the artisans shaping each
            destination’s soul.
          </p>
          <div className="destination-grid journal-grid">
            {journalEntries.map((entry) => {
              const card = (
                <article className="journal-card" key={entry.title}>
                  <h3>{entry.title}</h3>
                  <p>{entry.description}</p>
                  {entry.link.startsWith('#') ? (
                    <button type="button" className="journal-link" onClick={() => handleJournalLink(entry)}>
                      {entry.linkLabel}
                    </button>
                  ) : (
                    <Link className="journal-link" to={entry.link}>
                      {entry.linkLabel}
                    </Link>
                  )}
                </article>
              );
              return card;
            })}
          </div>
        </section>

        <section id="collaborations" className="collaborations fade-section">
          <h2>Collaborations</h2>
          <p>
            I work with luxury travel brands, tourism boards, and lifestyle partners to create unforgettable
            experiences.
          </p>
          <div className="collab-logos">
            {collaborationLogos.map((logo) => (
              <a href={logo.href} key={logo.href} target="_blank" rel="noreferrer">
                <img src={logo.image} alt={logo.alt} />
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
