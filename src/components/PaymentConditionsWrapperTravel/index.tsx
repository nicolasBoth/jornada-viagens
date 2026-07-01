import PaymentConditions from '../PaymentConditions';
import japaoMobile1 from '../../assets/img-paymentconditionstravel-mobile1.png';
import japaoMobile2 from '../../assets/img-paymentconditionstravel-mobile2.png';
import japaoMobile3 from '../../assets/img-paymentconditionstravel-mobile3.png';
import japaoTablet1 from '../../assets/img-paymentconditionstravel-tablet1.png';
import japaoTablet2 from '../../assets/img-paymentconditionstravel-tablet2.png';
import japaoTablet3 from '../../assets/img-paymentconditionstravel-tablet3.png';
import japaoDesktop1 from '../../assets/img-paymentconditionstravel-desktop1.png';
import japaoDesktop2 from '../../assets/img-paymentconditionstravel-desktop2.png';
import japaoDesktop3 from '../../assets/img-paymentconditionstravel-desktop3.png';

export default function PaymentConditionsWrapperTravel() {
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
