import logo from '../images/logo-large.svg';
import logoSmall from '../images/logo-small.svg';
import { Icon } from '../svg';

const Header = () => {
  return (
    <header className='header container'>
      <div className='header__logo'>
        <h1 className='sr-only'>
          Typing Speed Test - type as fast as you can in 60 seconds
        </h1>
        <picture>
          <source srcSet={logo} media='(min-width: 48em)' />
          <img src={logoSmall} alt='' role='presentation' />
        </picture>
      </div>
      <div className='header__score'>
        <Icon name='trophy' />
      </div>
    </header>
  );
};
export default Header;
