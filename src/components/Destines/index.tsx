import DestineProps from '../../types/DestineProps/type';

export default function Destines(props: DestineProps) {
  return (
      <div className="destino">
        <div className={props.classe}></div>
        <h3>{props.titulo}</h3>
        <p>{props.texto}</p>
        <button title="Clique para ver mais detalhes" className="cards-btn destino-btn">
          Ver detalhes
        </button>
    </div>
  );
}
