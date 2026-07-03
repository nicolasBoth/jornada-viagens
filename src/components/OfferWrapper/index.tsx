import { useTranslation } from 'react-i18next';
import OfferCards from '../OfferCards';

export default function OfferWrapper() {

  const { t } = useTranslation()

  return (
    <>
      <h2 className="ofertas-titulo">{t('homePage.offers.offersTitle')}</h2>
      <div className="cards">
        <OfferCards nome={t(`homePage.offers.countriesNames.japan`)} classe="japao" preco="R$ 4000" />
        <OfferCards nome={t(`homePage.offers.countriesNames.sanAndreas`)} classe="san-andreas" preco="R$ 3000" />
        <OfferCards nome={t(`homePage.offers.countriesNames.paraiba`)} classe="paraiba" preco="R$ 1200" />
        <OfferCards nome={t(`homePage.offers.countriesNames.manaus`)} classe="manaus" preco="R$ 1600" />
      </div>
    </>
  );
}
