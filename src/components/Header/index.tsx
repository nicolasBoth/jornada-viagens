import Menu from '../Menu';
import ImgsLogic from '../ImgsLogic';
import logoMobile from '../../assets/logo-header-mobile.svg';
import logoDesktop from '../../assets/logo-header-desktop.png';
import { NavLink } from 'react-router';

export default function Header() {
  return (
    <header className="cabecalho">
      <NavLink to="/" className="logo-cabecalho">
        <ImgsLogic imageMobile={logoMobile} imageTablet={logoMobile} imageDesktop={logoDesktop} />
      </NavLink>
      <Menu />
    </header>
  );
}
