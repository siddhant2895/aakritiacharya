import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import { getDestinationDetail } from '../data/destinationDetails.js';

export default function DestinationDetail() {
  const { destination, type, slug } = useParams();

  const detail = useMemo(() => getDestinationDetail(destination, type, slug), [destination, type, slug]);

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

  if (!detail) {
    return (
      <div className="page">
        <Navbar />
        <main>
          <Hero
            title={'Story Not Found'}
            subtitle="The experience you were looking for is no longer available."
            className="small-hero"
            ctaLabel="Return Home"
            ctaHref="/"
          />
          <section className="detail-content fade-section">
            <div className="detail-body">
              <p>We couldn’t locate this travel story. Please return to the home page to explore other destinations.</p>
              <Link to="/" className="btn-secondary">
                Back to Home
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const { destinationName, heroClass, footerTitle, backPath, typeLabel, item } = detail;

  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero
          title={item.title}
          subtitle={`${typeLabel} inspiration from ${destinationName}`}
          className={`small-hero detail-hero ${heroClass}`}
          ctaLabel={`Back to ${destinationName}`}
          ctaHref={backPath}
        />

        <section className="detail-content fade-section">
          <div className="detail-image-wrapper">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="detail-body">
            <p>{item.description}</p>
            {item.details?.map((paragraph, index) => (
              <p key={`${item.slug}-detail-${index}`}>{paragraph}</p>
            ))}
            {item.highlights?.length ? (
              <div className="detail-highlights">
                <h3>Highlights</h3>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="detail-actions">
              <Link to={backPath} className="btn-secondary">
                Explore more from {destinationName}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer title={footerTitle} />
    </div>
  );
}
