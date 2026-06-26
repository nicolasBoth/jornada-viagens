import PaymentConditions from "../PaymentConditions";

export default function PaymentConditionsWrapperHome() {
  return (
    <>
      <h2 className="pagamento-titulo">Condições de Pagamento</h2>
      <PaymentConditions nome1="japao1" nome2="japao2" nome3="japao3"/>
    </>
  )
}