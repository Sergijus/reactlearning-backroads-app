import { socialIcons } from '../data.js';

const SocialIcons = ({ ulClass, aClass }) => {
  return (
    <ul className={ulClass}>
      {socialIcons.map((socialLink) => {
        return (
          <li key={socialLink.id}>
            <a
              href={socialLink.href}
              target="_blank"
              rel="noreferrer"
              className={aClass}
            >
              <i className={socialLink.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialIcons;
