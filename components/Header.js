import Nav from './Nav';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Kepp up to date with the latest news
      </p>
    </div>
  );
};

export default Header;
