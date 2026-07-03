import { LucideTicketsPlane, Plane, Car, GlobeLock } from 'lucide-react';
import CategoryCards from '../CategoryCards';
import { useTranslation } from 'react-i18next';

export default function CategoryWrapper() {
  const { t } = useTranslation()

  return (
    <>
      <h2 className="ofertas-titulo busque">{t('homePage.categorys.categorysTitle')}</h2>
      <div className="cards">
        <CategoryCards nome={t('homePage.categorys.categorysCards.nationalPackages')} icon={<LucideTicketsPlane size={80} />} />
        <CategoryCards nome={t('homePage.categorys.categorysCards.internationalPackages')} icon={<Plane size={80} />} />
        <CategoryCards nome={t('homePage.categorys.categorysCards.transfer')} icon={<Car size={80} />} />
        <CategoryCards nome={t('homePage.categorys.categorysCards.travelInsurance')} icon={<GlobeLock size={80} />} />
      </div>
    </>
  );
}
