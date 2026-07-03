import imgHeroMobile from '../../assets/img-hero-mobile.jpg';
import imgHeroTablet from '../../assets/img-hero-tablet.png';
import imgHeroDesktop from '../../assets/img-hero-desktop.png';
import ImgsLogic from '../ImgsLogic';

import { useTranslation } from 'react-i18next'

export default function HeroHome() {
  const { t } = useTranslation()

  return (
    <>
      <ImgsLogic
        classe="img-hero"
        imageMobile={imgHeroMobile}
        imageTablet={imgHeroTablet}
        imageDesktop={imgHeroDesktop}
      />
      <section className="hero-texto">
        <p className="texto">
          {t('homePage.hero.heroText')}
        </p>
      </section>
    </>
  );
}
