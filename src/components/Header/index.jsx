import Menu from '../Menu';
import { NavLink } from 'react-router';

export default function Header() {
  return (
    <header className="cabecalho">
      <NavLink to="/" className="logo-cabecalho"></NavLink>
      <Menu />
    </header>
  );
}
