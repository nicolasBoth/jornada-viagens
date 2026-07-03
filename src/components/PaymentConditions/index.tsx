import { useTranslation } from 'react-i18next';
import PaymentConditionsProps from '../../types/PaymentConditionsProps/type';
import ImgsLogic from '../ImgsLogic';

export default function PaymentConditions(props: PaymentConditionsProps) {
  const { t } = useTranslation();

  return (
    <>
      <div className="pagamento-container">
        <div className="pagamento-secao1">
          <h3>{t('homePage.paymentConditions.paymentConditionsStallments')}</h3>
          <p>
            {t('homePage.paymentConditions.paymentConditionsText')}
          </p>
        </div>
        <div className="montagens-japao">
          <div className="montagens-japao-secao1">
            <ImgsLogic
              imageMobile={props.nomeMobile1}
              imageTablet={props.nomeTablet1}
              imageDesktop={props.nomeDesktop1}
              classe="japao1"
            />
            <ImgsLogic
              imageMobile={props.nomeMobile2}
              imageTablet={props.nomeTablet2}
              imageDesktop={props.nomeDesktop2}
              classe="japao2"
            />
          </div>
          <ImgsLogic
            imageMobile={props.nomeMobile3}
            imageTablet={props.nomeTablet3}
            imageDesktop={props.nomeDesktop3}
            classe="japao3"
          />
        </div>
      </div>
    </>
  );
}
