export default function Footer({ title = "Let's Collaborate" }) {
  return (
    <footer id="contact" className="footer fade-section">
      <h2>{title}</h2>
      <p>
        Partnership inquiries:{' '}
        <a href="mailto:contact@aakritiacharya.com">contact@aakritiacharya.com</a>
      </p>
      <p>&copy; {new Date().getFullYear()} Aakriti Acharya. All Rights Reserved.</p>
    </footer>
  );
}
