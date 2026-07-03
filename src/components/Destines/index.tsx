import { useTranslation } from 'react-i18next';
import DestineProps from '../../types/DestineProps/type';
import ImgsLogic from '../ImgsLogic';

export default function Destines(props: DestineProps) {
  const { t } = useTranslation()
  
  return (
      <div className="destino">
        <ImgsLogic imageMobile={props.imageDesktop} imageTablet={props.imageTablet} imageDesktop={props.imageDesktop} classe={props.classe}/>
        <h3>{props.titulo}</h3>
        <p>{props.texto}</p>
        <button title="Clique para ver mais detalhes" className="cards-btn destino-btn">
          {t('homePage.offers.btnText')}
        </button>
    </div>
  );
}
