const Footer = () => {
  return (
    <footer className="footer p-10 bg-secondary dark:bg-secondary text-secondary-content dark:text-secondary-content">
      <nav>
        <h6 className="footer-title">Davis Community Meals & Housing</h6>
        <a
          className="link link-hover"
          href="https://daviscommunitymeals.org/about/"
          target="_blank"
          rel="noreferrer"
        >
          About Us
        </a>
        <a
          className="link link-hover"
          href="https://daviscommunitymeals.org/contact-us/"
          target="_blank"
          rel="noreferrer"
        >
          Contact
        </a>
        <a
          className="link link-hover"
          href="https://daviscommunitymeals.org/volunteer/"
          target="_blank"
          rel="noreferrer"
        >
          Volunteer
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Made with &#128153; by:</h6>
        <a
          className="link link-hover"
          href="https://www.linkedin.com/in/luceium"
          target="_blank"
          rel="noreferrer"
        >
          Mauricio Curiel
        </a>
        <a
          className="link link-hover"
          href="https://www.linkedin.com/in/kevin-h-bba8b2256/"
          target="_blank"
          rel="noreferrer"
        >
          Kevin Huang
        </a>
        <a
          className="link link-hover"
          href="https://www.linkedin.com/in/steven-le-90b28b23b/"
          target="_blank"
          rel="noreferrer"
        >
          Steven Le
        </a>
        <a
          className="link link-hover"
          href="https://www.linkedin.com/in/michael-pavlik/"
          target="_blank"
          rel="noreferrer"
        >
          Michael Pavlik
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
