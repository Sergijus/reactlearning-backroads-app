import { pageLinks } from '../data.js';

const Menu = ({ ulClass, liClass }) => {
  return (
    <ul className={ulClass} id="nav-links">
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={liClass} rel="noreferrer">
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default Menu;
