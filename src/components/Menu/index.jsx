import { IoMdMenu, IoIosClose } from 'react-icons/io';
import { useState, useEffect } from 'react';

export default function Menu() {
  const [showMenu, setShowMenu] = useState(true);
  const [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(!open);
  }

  useEffect(() => {
    if (window.screen.width >= 1024) {
      setShowMenu(false);
    }
  }, []);

  if (!showMenu) {
    console.log('chupa');
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
      {!open && showMenu && ( 
        <button className="menu" onClick={openMenu}>
          <IoMdMenu
            size={48}
            color="white"
            aria-label="Menu principal"
            aria-controls="menuLinks"
            aria-expanded="true"
          />
        </button>
      )}
      <nav className={`nav-header ${open && 'links--aberto'}`}>
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
