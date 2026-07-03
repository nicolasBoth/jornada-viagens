import { useTranslation } from 'react-i18next';
import OfferCardProps from '../../types/OfferCardProps/type.ts';

export default function OfferCards(props: OfferCardProps) {
  const { t } = useTranslation();

  return (
    <>
      <div className={`card ${props.classe}`}>
        <h4>HOTEL + AÉREO</h4>
        <h3>{props.nome}</h3>
        <h3>{props.preco}</h3>
        <a title="Clique para ver mais detalhes" className="cards-btn">
          {t('homePage.offers.btnText')}
        </a>
      </div>
    </>
  );
}
