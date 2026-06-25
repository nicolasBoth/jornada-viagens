import { FaStar } from 'react-icons/fa';
import talitaFoto from '../../assets/talita.png';
import amariFoto from '../../assets/amari.png';
import lauroFoto from '../../assets/lauro.png';

const depoimentos = [
  {
    nome: 'Talita Villas Boas',
    foto: talitaFoto,
    comentario:
      'A Jornada foi uma das melhores agências de viagens que eu já experimentei. O serviço ao cliente foi excepcional, e toda a equipe foi muito atenciosa e prestativa.',
  },
  {
    nome: 'Amari Salin',
    foto: amariFoto,
    comentario:
      'Recomendo fortemente a agência de viagens Jornada. Eles oferecem um serviço personalizado e de alta qualidade que excedeu minhas expectativas em minha última viagem.',
  },
  {
    nome: 'Lauro B. Matos',
    foto: lauroFoto,
    comentario:
      'Minha viagem com a Jornada foi incrível! Recomendo muito a agência para quem busca uma experiência emocionante e personalizada.',
  },
];

export default function Depoiments() {
  return (
    <>
      <h2 className="pagamento-titulo">Depoimentos</h2>

      <div className="depoimentos-container">
        {depoimentos.map(({ nome, foto, comentario }) => (
          <div key={nome} className="avaliacao">
            <div className="avaliacao-secao1">
              <img src={foto} alt={nome} />
            </div>
            <div className="avaliacao-secao2">
              <h3>{nome}</h3>
              <div className="estrelas">
                <FaStar size={32} color="rgb(255, 59, 59)" />
                <FaStar size={32} color="rgb(255, 59, 59)" />
                <FaStar size={32} color="rgb(255, 59, 59)" />
                <FaStar size={32} color="rgb(255, 59, 59)" />
                <FaStar size={32} color="rgb(255, 59, 59)" />
              </div>
            </div>
            <article>{comentario}</article>
          </div>
        ))}
      </div>
    </>
  );
}
