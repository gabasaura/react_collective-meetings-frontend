import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Link to="/">WeMeet</Link>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/your-meetings">Your Meetings</Link>
          </li>
          <li>
            <Link to="/new-meeting">New Meeting</Link>
          </li>
          <li>
            <Link to="/about">About WeMeet</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
