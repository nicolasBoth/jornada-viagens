import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './index.css';
import logoRodape from '../../assets/logo-footer.png';
import FooterProps from '../../types/FooterProps/type';

import imgHomeMobile from '../../assets/pre-rodape-mobile.png';
import imgHomeTablet from '../../assets/pre-rodape-tablet.jpg';
import imgHomeDesktop from '../../assets/pre-rodape-desktop.jpg';
import imgContactMobile from '../../assets/img-pre-rodape-contact-mobile.png';
import imgContactTablet from '../../assets/img-pre-rodape-contact-tablet.png';
import imgContactDesktop from '../../assets/img-pre-rodape-contact-desktop.png';
import imgTravelMobile from '../../assets/img-pre-rodape-travel-mobile.png';
import imgTravelTablet from '../../assets/img-pre-rodape-travel-tablet.png';
import imgTravelDesktop from '../../assets/img-pre-rodape-travel-desktop.png';
import ImgsLogic from '../ImgsLogic';
import { useTranslation } from 'react-i18next';

export default function Footer(props: FooterProps) {
  const { t } = useTranslation()

  return (
    <>
      <div className="rodape">
        {props.hasImage && (
          <ImgsLogic
            imageMobile={imgHomeMobile}
            imageTablet={imgHomeTablet}
            imageDesktop={imgHomeDesktop}
            classe="img-pre-rodape"
          />
        )}
        {props.hasImageContact && (
          <ImgsLogic
            imageMobile={imgContactMobile}
            imageTablet={imgContactTablet}
            imageDesktop={imgContactDesktop}
            classe="img-pre-rodape"
          />
        )}
        {props.hasImageTravel && (
          <ImgsLogic
            imageMobile={imgTravelMobile}
            imageTablet={imgTravelTablet}
            imageDesktop={imgTravelDesktop}
            classe="img-pre-rodape"
          />
        )}

        <div className="rodape-container">
          <div className="rodape-secao1">
            <img src={logoRodape} alt="" className="logo-rodape" />
            <p>{t('homePage.footer.footerOpeningHours')}</p>
            <p>{t('homePage.footer.footerCredits')}</p>
          </div>
          <div className="redes">
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
        </div>
      </div>
    </>
  );
}
