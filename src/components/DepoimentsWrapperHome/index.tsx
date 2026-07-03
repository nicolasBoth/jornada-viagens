import Depoiments from '../Depoiments/index';
import talitaFoto from '../../assets/talita.png';
import amariFoto from '../../assets/amari.png';
import lauroFoto from '../../assets/lauro.png';
import { useTranslation } from 'react-i18next';

export default function DepoimentsWrapper() {
  const { t } = useTranslation()

  return (
    <>
      <h2 className="pagamento-titulo">{t('homePage.depoiments.depoimentsTitle')}</h2>
      <div className="depoimentos-container">
        <Depoiments
          nome="Talita Villas Boas"
          foto={talitaFoto}
          texto={t('homePage.depoiments.depoiment.talitaDepoiment')}
        />
        <Depoiments
          nome="Amari Salin"
          foto={amariFoto}
          texto={t('homePage.depoiments.depoiment.amariDepoiment')}
        />
        <Depoiments
          nome="Lauro B. Matos"
          foto={lauroFoto}
          texto={t('homePage.depoiments.depoiment.lauroDepoiment')}
        />
      </div>
    </>
  );
}
