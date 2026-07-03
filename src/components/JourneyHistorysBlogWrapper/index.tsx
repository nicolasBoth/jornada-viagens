import JourneyHistorysBlog from '../../components/JourneyHistorysBlog/index';
import JourneyCityExploring from '../JourneyCityExploringBlog';

import chegadaImgMobile from '../../assets/chegadaimg-mobile.png'
import chegadaImgDesktop from '../../assets/chegadaimg-desktop.png'
import acomodacaoImgMobile from '../../assets/Tokyo.jpg'
import acomodacaoImgDesktop from '../../assets/Tokyo-desktop.png'
import { useTranslation } from 'react-i18next';


export default function JourneyHistorysBlogWrapper() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="pagamento-titulo">Tokyo</h2>
      <JourneyHistorysBlog
        nome="chegada"
        titulo={t('blogPage.journeyHistorys.history.arrivingTitle')}
        texto={t('blogPage.journeyHistorys.history.arrivingText')}
        classe="chegada-img"
        imageMobile={chegadaImgMobile}
        imageTablet={chegadaImgMobile}
        imageDesktop={chegadaImgDesktop}
      />
      <JourneyHistorysBlog
        nome="acomodacao"
        titulo={t('blogPage.journeyHistorys.history.accommodationTitle')}
        texto={t('blogPage.journeyHistorys.history.accommodationText')}
        classe="acomodacao-img"
        imageMobile={acomodacaoImgMobile}
        imageTablet={acomodacaoImgMobile}
        imageDesktop={acomodacaoImgDesktop}
      />
      <p className="descricao-acomodacaoimg">{t('blogPage.journeyHistorys.history.accommodationImgDesc')}</p>
      <JourneyCityExploring
        titulo={t('blogPage.journeyHistorys.history.exploringCityTitle')}
        texto={t('blogPage.journeyHistorys.history.exploringCityText')}
      />
      <JourneyCityExploring
        titulo={t('blogPage.journeyHistorys.history.shoppingTitle')}
        texto={t('blogPage.journeyHistorys.history.shoppingText')}
      />
      <JourneyCityExploring
        titulo={t('blogPage.journeyHistorys.history.gastronomyTitle')}
        texto={t('blogPage.journeyHistorys.history.gastronomyText')}
      />
      <JourneyCityExploring
        titulo={t('blogPage.journeyHistorys.history.concludingTitle')}
        texto={t('blogPage.journeyHistorys.history.concludingText')}
      />
    </>
  );
}