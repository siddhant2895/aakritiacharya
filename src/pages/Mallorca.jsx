import { useEffect } from 'react';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import { mallorcaExperiences, mallorcaStays } from '../data/mallorca.js';

export default function Mallorca() {
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
          title={'Mallorca, Spain'}
          subtitle="Sun-drenched fincas, crystalline calas, and a gentle Mediterranean rhythm."
          className="small-hero mallorca-hero"
        />

        <section className="about-destination fade-section">
          <h2>Why Mallorca?</h2>
          <p>
            Mallorca invites you to slow down amidst terracotta towns, fragrant citrus groves, and hidden coves with
            sapphire waters. The island rewards mindful travelers with authentic experiences and heartfelt hospitality.
          </p>
          <p>
            Beyond the shoreline, discover UNESCO-listed mountain ranges, artisanal workshops, and farm-to-table dining that
            celebrates local ingredients. Mallorca is an ode to Mediterranean living at its most refined.
          </p>
        </section>

        <section className="experiences fade-section">
          <h2>Experiences to Savor</h2>
          <div className="experience-grid">
            {mallorcaExperiences.map((experience) => (
              <div className="experience-card" key={experience.title}>
                <img src={experience.image} alt={experience.title} />
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="luxury-stays fade-section">
          <h2>Luxury Stays in Mallorca</h2>
          <div className="stay-grid">
            {mallorcaStays.map((stay) => (
              <div className="stay-card" key={stay.title}>
                <img src={stay.image} alt={stay.title} />
                <h3>{stay.title}</h3>
                <p>{stay.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer title="Design Your Mallorcan Retreat" />
    </div>
  );
}
