import { useTranslation } from 'react-i18next';
import HeroPages from '../HeroPages';

export default function HeroBlog() {
  const { t } = useTranslation();

  return (
    <HeroPages
      titulo={t('blogPage.hero.heroTitle')}
      texto={t('blogPage.hero.heroText')}
      background="img-blog"
    />
  );
}
