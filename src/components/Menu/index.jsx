import { IoMdMenu, IoIosClose } from 'react-icons/io';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Globe, Plane, ContactIcon } from 'lucide-react';
import { useIsMobile } from '/src/hooks/useIsMobile.js';

export default function Menu() {
  const [showMenu, setShowMenu] = useState(true);
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
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Pacotes de viagem</a>
            </li>
            <li>
              <a href="#">Contato</a>
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
              <Globe size={24} color="#fff" className="links-icon" />
              <a href="#">Blog</a>
            </li>
            <li>
              <Plane size={24} color="#fff" className="links-icon" />
              <a href="#">Pacotes de viagem</a>
            </li>
            <li>
              <ContactIcon size={24} color="#fff" className="links-icon" />
              <a href="#">Contato</a>
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
