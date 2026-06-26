import { IoMdMenu, IoIosClose } from 'react-icons/io';
import { FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import { useState } from 'react';
import { Globe, Plane, ContactIcon, Home } from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { NavLink } from 'react-router';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  function openMenu() {
    setOpen(!open);
  }

  if (!isMobile) {
    return (
      <>
        <nav className="nav-header" id="navHeader">
          <ul id="menuLinks" className="links" aria-hidden="false">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/viagem">Pacotes de viagem</NavLink>
            </li>
            <li>
              <NavLink to="/contato">Contato</NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }

  return (
    <>
      {isMobile && !open && (
        <button className="menu" onClick={openMenu}>
          <IoMdMenu
            size={48}
            color="white"
            aria-label="Menu principal"
            aria-controls="menuLinks"
            aria-expanded="true"
          />
        </button>)}
      <nav className={`nav-header ${open && 'links--aberto'}`}>
        <div className="pages">
          <div className="fechar-links">
            <button className="menu fechar" onClick={openMenu}>
              <IoIosClose
                className="close-menu"
                size={48}
                color="white"
                aria-label="Fechar menu"
                aria-controls="menuLinks"
                aria-expanded="true"
              />
            </button>
          </div>
          <ul id="menuLinks" className="links" aria-hidden={!open}>
            <li>
              <Home size={30} color="#fff" className="links-icon" />
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <Globe size={30} color="#fff" className="links-icon" />
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <Plane size={30} color="#fff" className="links-icon" />
              <NavLink to="/viagem">Pacotes de viagem</NavLink>
            </li>
            <li>
              <ContactIcon size={30} color="#fff" className="links-icon" />
              <NavLink to="/contato">Contato</NavLink>
            </li>
          </ul>
        </div>
        <div className="redes redes-menu">
          <p>Acesse nossas redes:</p>
          <ul>
            <li>
              <a href="#" className="facebook">
                <FaFacebook size={24} color="rgb(255, 255, 255)" />
              </a>
            </li>
            <li>
              <a href="#" className="instagram">
                <FaInstagram size={24} color="rgb(255, 255, 255)" />
              </a>
            </li>
            <li>
              <a href="#" className="twitter">
                <FaTwitter size={24} color="rgb(255, 255, 255)" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
