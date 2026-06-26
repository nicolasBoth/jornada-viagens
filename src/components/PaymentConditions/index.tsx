import PaymentConditionsProps from "../../types/PaymentConditionsProps/type";

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
            <div className={props.nome1}></div>
            <div className={props.nome2}></div>
          </div>
          <div className={props.nome3}></div>
        </div>
      </div>
    </>
  );
}
