import Destines from '../Destines';

import imgOsakaMobile from '../../assets/Osaka.jpg';
import imgHiroshimaMobile from '../../assets/hiroshima-mobile.png';
import imgHiroshimaTablet from '../../assets/hiroshima-tablet.png';
import imgKyotoMobile from '../../assets/kyoto-mobile.png';
import imgKyotoTablet from '../../assets/kyoto-tablet.png';

export default function DestinesWrapperBlog() {
  return (
    <>
      <h2 className="pagamento-titulo">Outros Posts</h2>
      <div className="destinos-container">
          <Destines
            titulo="Osaka"
            texto="Osaka é uma cidade agitada e moderna no Japãos. A cidade é famosa por sua gastronomia deliciosa e por ser um excelente ponto de partida para explorar outras cidades japonesas próximas."
            imageMobile={imgOsakaMobile}
            imageTablet={imgOsakaMobile}
            imageDesktop={imgOsakaMobile}
            classe='osaka'
          />
          <Destines
            titulo="Hiroshima"
            texto="Cidade localizada no sudoeste do Japão, conhecida mundialmente por ter sido o alvo do primeiro bombardeio atômico da história. Hoje, a cidade é um símbolo de paz e reconciliação. Além disso, Hiroshima também é conhecida por sua gastronomia."
            imageMobile={imgHiroshimaMobile}
            imageTablet={imgHiroshimaTablet}
            imageDesktop={imgHiroshimaMobile}
            classe='osaka'
          />
          <Destines
            titulo="Kyoto"
            texto="Kyoto é uma cidade localizada no centro do Japão, conhecida por ser a antiga capital do país e preservar muitas tradições culturais japonesas. Com seus templos históricos, jardins tradicionais e cerimônias de chá, é um mergulho na cultura japonesa."
            imageMobile={imgKyotoMobile}
            imageTablet={imgKyotoTablet}
            imageDesktop={imgKyotoMobile}
            classe='osaka'
          />
      </div>
    </>
  );
}
