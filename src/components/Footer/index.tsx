import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './index.css';
import logoRodape from '../../assets/Logo-branco 1.png';
import FooterProps from '../../types/FooterProps/type';

import { useDevice } from '../../hooks/useDevice';

import imgHomeMobile from '../../assets/pre-rodape-mobile.png';
import imgHomeTablet from '../../assets/pre-rodape-tablet.jpg';
import imgHomeDesktop from '../../assets/pre-rodape-desktop.jpg';
import imgContactMobile from '../../assets/img-pre-rodape-contact-mobile.png';
import imgContactTablet from '../../assets/img-pre-rodape-contact-tablet.png';
import imgContactDesktop from '../../assets/img-pre-rodape-contact-desktop.png';
import imgTravelMobile from '../../assets/img-pre-rodape-travel-mobile.png';
import imgTravelTablet from '../../assets/img-pre-rodape-travel-tablet.png';
import imgTravelDesktop from '../../assets/img-pre-rodape-travel-desktop.png';

export default function Footer(props: FooterProps) {
  const isMobile = useDevice(768);
  const isTablet = useDevice(1024) && !isMobile;
  const isDesktop = !isMobile && !isTablet;

  return (
    <>
      <div className="rodape">
        {/* home image */}
        {props.hasImage && isMobile && (
          <img src={imgHomeMobile} alt="" className="img-pre-rodape" />
        )}
        {props.hasImage && isTablet && (
          <img src={imgHomeTablet} alt="" className="img-pre-rodape" />
        )}
        {props.hasImage && isDesktop && (
          <img src={imgHomeDesktop} alt="" className="img-pre-rodape" />
        )}
        
        {/* contact image */}
        {props.hasImageContact && isMobile && (
          <img src={imgContactMobile} alt="" className="img-pre-rodape" />
        )}
        {props.hasImageContact && isTablet && (
          <img src={imgContactTablet} alt="" className="img-pre-rodape" />
        )}
        {props.hasImageContact && isDesktop && (
          <img src={imgContactDesktop} alt="" className="img-pre-rodape" />
        )}

        {/* travel image */}
        {props.hasImageTravel && isMobile && (
          <img src={imgTravelMobile} alt="" className="img-pre-rodape" />
        )}
        {props.hasImageTravel && isTablet && (
          <img src={imgTravelTablet} alt="" className="img-pre-rodape" />
        )}
        {props.hasImageTravel && isDesktop && (
          <img src={imgTravelDesktop} alt="" className="img-pre-rodape" />
        )}

        <div className="rodape-container">
          <div className="rodape-secao1">
            <img src={logoRodape} alt="" className="logo-rodape" />
            <p>Horário de atendimento: 08h - 20h (Segunda e Sábado)</p>
            <p>Desenvolvido por Alura. Projeto fictício sem fins comerciais</p>
          </div>
          <div className="redes">
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
        </div>
      </div>
    </>
  );
}
