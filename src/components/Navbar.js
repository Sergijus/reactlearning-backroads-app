import logo from '../images/logo.svg';
import Menu from './Menu';
import SocialIcons from './SocialIcons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <Menu ulClass="nav-links" liClass="nav-link" />
        <SocialIcons ulClass="nav-icons" aClass="nav-icon" />
      </div>
    </nav>
  );
};
export default Navbar;
