import PaymentConditions from '../PaymentConditions';

import japaoMobile1 from '../../assets/japao1-mobile.png';
import japaoMobile2 from '../../assets/japao2-mobile.png';
import japaoMobile3 from '../../assets/japao3-mobile.jpg';
import japaoTablet1 from '../../assets/japao1-tablet.jpg';
import japaoTablet2 from '../../assets/japao2-tablet.jpg';
import japaoTablet3 from '../../assets/japao3-tablet.jpg';
import japaoDesktop1 from '../../assets/japao1-desktop.jpg';
import japaoDesktop2 from '../../assets/japao2-desktop.jpg';
import japaoDesktop3 from '../../assets/japao3-desktop.jpg';

export default function PaymentConditionsWrapperHome() {
  return (
    <>
      <h2 className="pagamento-titulo">Condições de Pagamento</h2>
      <PaymentConditions
        nomeMobile1={japaoMobile1}
        nomeMobile2={japaoMobile2}
        nomeMobile3={japaoMobile3}
        nomeTablet1={japaoTablet1}
        nomeTablet2={japaoTablet2}
        nomeTablet3={japaoTablet3}
        nomeDesktop1={japaoDesktop1}
        nomeDesktop2={japaoDesktop2}
        nomeDesktop3={japaoDesktop3}
      />
    </>
  );
}
