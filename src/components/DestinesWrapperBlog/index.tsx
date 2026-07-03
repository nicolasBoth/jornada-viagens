import Destines from '../Destines';

import imgOsakaMobile from '../../assets/Osaka.jpg';
import imgHiroshimaMobile from '../../assets/hiroshima-mobile.png';
import imgHiroshimaTablet from '../../assets/hiroshima-tablet.png';
import imgKyotoMobile from '../../assets/kyoto-mobile.png';
import imgKyotoTablet from '../../assets/kyoto-tablet.png';
import { useTranslation } from 'react-i18next';

export default function DestinesWrapperBlog() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="pagamento-titulo">{t('blogPage.otherPosts.otherPostsTitle')}</h2>
      <div className="destinos-container">
          <Destines
            titulo={t('homePage.destines.destine.osakaTitle')}
            texto={t('homePage.destines.destine.osakaText')}
            imageMobile={imgOsakaMobile}
            imageTablet={imgOsakaMobile}
            imageDesktop={imgOsakaMobile}
            classe='osaka'
          />
          <Destines
            titulo={t('blogPage.otherPosts.otherPostsDestines.hiroshimaTitle')}
            texto={t('homePage.destines.destine.osakaText')}
            imageMobile={imgHiroshimaMobile}
            imageTablet={imgHiroshimaTablet}
            imageDesktop={imgHiroshimaMobile}
            classe='osaka'
          />
          <Destines
            titulo={t('blogPage.otherPosts.otherPostsDestines.kyotoTitle')}
            texto={t('homePage.destines.destine.osakaText')}
            imageMobile={imgKyotoMobile}
            imageTablet={imgKyotoTablet}
            imageDesktop={imgKyotoMobile}
            classe='osaka'
          />
      </div>
    </>
  );
}
