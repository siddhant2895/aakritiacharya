import { Link } from 'react-router-dom';

export default function Hero({ title, subtitle, ctaLabel, ctaHref, onCtaClick, className = '' }) {
  const isInternalSection = ctaHref?.startsWith('#');

  const handleClick = (event) => {
    if (onCtaClick) {
      event.preventDefault();
      const target = ctaHref?.replace('#', '') ?? '';
      onCtaClick(target);
    }
  };

  return (
    <header className={`hero ${className}`}>
      <div className="hero-content fade-section">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle ? <p>{subtitle}</p> : null}
        {ctaLabel && ctaHref ? (
          isInternalSection ? (
            <a href={ctaHref} className="btn-primary" onClick={handleClick}>
              {ctaLabel}
            </a>
          ) : (
            <Link to={ctaHref} className="btn-primary">
              {ctaLabel}
            </Link>
          )
        ) : null}
      </div>
    </header>
  );
}
