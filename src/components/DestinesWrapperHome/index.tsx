import Destines from '../Destines';

import tokyoMobile from '../../assets/Tokyo.jpg';
import osakaMobile from '../../assets/Osaka.jpg';

export default function DestinesWrapper() {
  return (
    <>
      <h2 className="pagamento-titulo ">Destinos Populares</h2>
      <div className="destinos-container">
          <Destines
            titulo="Tokyo"
            texto="Tóquio é uma cidade vibrante e cosmopolita, com seus templos históricos, museus de arte moderna e arranha-céus icônicos. Não perca a chance de mergulhar em sua atmosfera fascinante."
            imageMobile={osakaMobile}
            imageTablet={osakaMobile}
            imageDesktop={osakaMobile}
          />
          <Destines
            titulo="Osaka"
            texto="Osaka é uma cidade agitada e moderna no Japãos. A cidade é famosa por sua gastronomia deliciosa e por ser um excelente ponto de partida para explorar outras cidades japonesas próximas."
            imageMobile={tokyoMobile}
            imageTablet={tokyoMobile}
            imageDesktop={tokyoMobile}

          />
      </div>
    </>
  );
}
