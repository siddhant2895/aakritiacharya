import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import { sicilyExperiences, sicilyStays } from '../data/sicily.js';

export default function Sicily() {
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

  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero
          title={'Sicily, Italy'}
          subtitle="A land of sun-soaked coasts, baroque towns, and timeless Mediterranean living."
          className="small-hero sicily-hero"
        />

        <section className="about-destination fade-section">
          <h2>Why Sicily?</h2>
          <p>
            Sicily is a tapestry of history, culture, and natural beauty. From the Greek temples of Agrigento to the
            charming alleys of Ragusa and the volcanic landscapes of Mount Etna, every corner offers something unique.
          </p>
          <p>
            Here, life unfolds at a different pace. Meals are long and soulful, wines are savored, and history is woven
            into the daily rhythm of modern life. For the mindful traveler, Sicily is not just a place to visit, but a
            place to experience.
          </p>
        </section>

        <section className="experiences fade-section">
          <h2>Experiences to Savor</h2>
          <div className="experience-grid">
            {sicilyExperiences.map((experience) => (
              <Link
                to={`/destinations/sicily/experiences/${experience.slug}`}
                className="card-link"
                key={experience.slug}
              >
                <div className="experience-card">
                  <img src={experience.image} alt={experience.title} />
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="luxury-stays fade-section">
          <h2>Luxury Stays in Sicily</h2>
          <div className="stay-grid">
            {sicilyStays.map((stay) => (
              <Link to={`/destinations/sicily/stays/${stay.slug}`} className="card-link" key={stay.slug}>
                <div className="stay-card">
                  <img src={stay.image} alt={stay.title} />
                  <h3>{stay.title}</h3>
                  <p>{stay.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer title="Plan Your Sicilian Journey" />
    </div>
  );
}
