import { IoMdMenu, IoIosClose } from 'react-icons/io';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import { Globe, Plane, ContactIcon, Home, Languages } from 'lucide-react';
import { useDevice } from '../../hooks/useDevice';
import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const isMobile = useDevice(1024);
  const { t } = useTranslation();

  function openMenu() {
    setOpen(!open);
  }

  if (!isMobile) {
    return (
      <>
        <nav className="nav-header" id="navHeader">
          <ul id="menuLinks" className="links" aria-hidden="false">
            <li>
              <NavLink to="/">{t('homePage.menu.home')}</NavLink>
            </li>
            <li>
              <NavLink to="/blog">{t('homePage.menu.blog')}</NavLink>
            </li>
            <li>
              <NavLink to="/viagem">{t('homePage.menu.travelPackages')}</NavLink>
            </li>
            <li>
              <NavLink to="/contato">{t('homePage.menu.contact')}</NavLink>
            </li>
          </ul>

          <div className="lang">
            <Languages size={30} color='#fff' className='links-icon'/>
            <select
              className="changing-language"
              onChange={(e) => {
                i18next.changeLanguage(e.target.value);
              }}
            >
              <option value="br">PT</option>
              <option value="en">EN</option>
            </select>
          </div>
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
        </button>
      )}
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
              <NavLink to="/">{t('homePage.menu.home')}</NavLink>
            </li>
            <li>
              <Globe size={30} color="#fff" className="links-icon" />
              <NavLink to="/blog">{t('homePage.menu.blog')}</NavLink>
            </li>
            <li>
              <Plane size={30} color="#fff" className="links-icon" />
              <NavLink to="/viagem">{t('homePage.menu.travelPackages')}</NavLink>
            </li>
            <li>
              <ContactIcon size={30} color="#fff" className="links-icon" />
              <NavLink to="/contato">{t('homePage.menu.contact')}</NavLink>
            </li>
          </ul>
          <div className="lang">
            <Languages size={30} color="#fff" className="links-icon language-icon" />
            <select
              className="changing-language"
              onChange={(e) => {
                i18next.changeLanguage(e.target.value);
              }}
            >
              <option value="br">Português</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
        <div className="redes redes-menu">
          <p>{t('homePage.footer.footerSocialMedia')}</p>
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
