import imgHeroMobile from '../../assets/img-hero-mobile.jpg';
import imgHeroTablet from '../../assets/img-hero-tablet.png';
import imgHeroDesktop from '../../assets/img-hero-desktop.png';
import ImgsLogic from '../ImgsLogic';

export default function HeroHome() {
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
          Somos uma agência apaixonada por criar viagens inesquecíveis. Do destino à seleção das
          atividades, cuidamos de todos os detalhes para que você aproveite ao máximo cada momento
          da sua jornada!
        </p>
      </section>
    </>
  );
}
