import OfferCards from "../OfferCards";

export default function OfferWrapper() {
  return (
    <>
      <h2 className="ofertas-titulo">Ofertas da semana</h2>
      <div className="cards">
        <OfferCards nome="Japão" classe="japao" preco="R$ 4000" />
        <OfferCards nome="San Andreas" classe="san-andreas" preco="R$ 3000" />
        <OfferCards nome="Paraiba" classe="paraiba" preco="R$ 1200" />
        <OfferCards nome="Manaus" classe="manaus" preco="R$ 1600" />
      </div>
    </>
  );
}