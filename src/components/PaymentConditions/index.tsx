import PaymentConditionsProps from '../../types/PaymentConditionsProps/type';
import ImgsLogic from '../ImgsLogic';

export default function PaymentConditions(props: PaymentConditionsProps) {
  return (
    <>
      <div className="pagamento-container">
        <div className="pagamento-secao1">
          <h3> Parcelamento em até 12x!</h3>
          <p>
            Viaje pagando em até 12 parcelas no cartão, à vista no crédito com 5% de desconto ou no
            Pix com 10% de desconto
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
