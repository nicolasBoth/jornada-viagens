import { FaStar } from 'react-icons/fa';
import DepoimentsProps from '../../types/DepoimentsProps/type';

export default function Depoiments(props: DepoimentsProps) {
  return (
    <>
      <div className="avaliacao">
        <div className="avaliacao-secao1">
          <img src={props.foto} />
        </div>
        <div className="avaliacao-secao2">
          <h3>{props.nome}</h3>
          <div className="estrelas">
            <FaStar size={32} color="rgb(255, 59, 59)" />
            <FaStar size={32} color="rgb(255, 59, 59)" />
            <FaStar size={32} color="rgb(255, 59, 59)" />
            <FaStar size={32} color="rgb(255, 59, 59)" />
            <FaStar size={32} color="rgb(255, 59, 59)" />
          </div>
        </div>
        <article>{props.texto}</article>
      </div>
    </>
  );
}
