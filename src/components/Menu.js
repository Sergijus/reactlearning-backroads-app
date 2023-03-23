import { pageLinks, socialIcons } from '../data.js';

const Menu = ({ ulClass, liClass }) => {
  return (
    <ul className={ulClass} id="nav-links">
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={liClass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default Menu;
