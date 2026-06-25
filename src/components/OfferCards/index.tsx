import OfferCardProps from "../../types/types";


export default function OfferCards(props : OfferCardProps) {
  return (
    <>
       <div className={`card ${props.classe}`}>
        <h4>HOTEL + AÉREO</h4>
        <h3>{props.nome}</h3>
        <h3>{props.preco}</h3>
        <a title="Clique para ver mais detalhes" className="cards-btn">
          Ver detalhes
        </a>
       </div>
    </>
  );
}