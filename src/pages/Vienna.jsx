import { useEffect } from 'react';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import { viennaExperiences, viennaStays } from '../data/vienna.js';

export default function Vienna() {
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
          title={'Vienna, Austria'}
          subtitle="Imperial elegance, coffeehouse rituals, and classical artistry in harmony."
          className="small-hero vienna-hero"
        />

        <section className="about-destination fade-section">
          <h2>Why Vienna?</h2>
          <p>
            Vienna is a city that lingers in the details — gilded ceilings, the aroma of freshly ground coffee, and the sound
            of violins drifting through grand boulevards. Here, the pace is refined and unhurried, inviting travelers to
            savor each moment.
          </p>
          <p>
            From imperial palaces and opera houses to vibrant contemporary galleries, Vienna gracefully balances historic
            grandeur with modern creativity. Each neighborhood offers a new rhythm, ready to be discovered at your own pace.
          </p>
        </section>

        <section className="experiences fade-section">
          <h2>Experiences to Savor</h2>
          <div className="experience-grid">
            {viennaExperiences.map((experience) => (
              <div className="experience-card" key={experience.title}>
                <img src={experience.image} alt={experience.title} />
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="luxury-stays fade-section">
          <h2>Luxury Stays in Vienna</h2>
          <div className="stay-grid">
            {viennaStays.map((stay) => (
              <div className="stay-card" key={stay.title}>
                <img src={stay.image} alt={stay.title} />
                <h3>{stay.title}</h3>
                <p>{stay.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer title="Plan Your Viennese Escape" />
    </div>
  );
}
