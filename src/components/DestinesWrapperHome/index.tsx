import Destines from '../Destines';

import tokyoMobile from '../../assets/Tokyo.jpg';
import osakaMobile from '../../assets/Osaka.jpg';
import { useTranslation } from 'react-i18next';

export default function DestinesWrapper() {
  const { t } = useTranslation()

  return (
    <>
      <h2 className="pagamento-titulo ">{t('homePage.destines.destinesTitle')}</h2>
      <div className="destinos-container">
          <Destines
            titulo={t('homePage.destines.destine.tokyoTitle')}
            texto={t('homePage.destines.destine.tokyoText')}
            imageMobile={tokyoMobile}
            imageTablet={tokyoMobile}
            imageDesktop={tokyoMobile}
            classe='osaka'
          />
          <Destines
            titulo={t('homePage.destines.destine.osakaTitle')}
            texto={t('homePage.destines.destine.osakaText')}
            imageMobile={osakaMobile}
            imageTablet={osakaMobile}
            imageDesktop={osakaMobile}
            classe='osaka'
          />
      </div>
    </>
  );
}
