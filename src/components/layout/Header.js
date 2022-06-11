import { NavLink } from 'react-router-dom';
import { AuthButton } from '../auth';

import './Header.css';

const isSelected = ({ isActive }) => (isActive ? 'selected' : '');

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <strong>
              Nodepop React
            </strong>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/adverts" className={isSelected} end>
              Nodepop
            </NavLink>
          </li>
          <li>
            <NavLink to="/adverts/new" className={isSelected}>
              New advert
            </NavLink>
          </li>
          <li>
            <AuthButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
