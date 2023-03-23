import Menu from './Menu';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className="section footer">
      <Menu ulClass="footer-links" liClass="footer-link" />
      <SocialIcons ulClass="footer-icons" aClass="footer-icon" />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
