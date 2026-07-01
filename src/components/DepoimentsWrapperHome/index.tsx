import Depoiments from '../Depoiments/index';
import talitaFoto from '../../assets/talita.png';
import amariFoto from '../../assets/amari.png';
import lauroFoto from '../../assets/lauro.png';

export default function DepoimentsWrapper() {
  return (
    <>
      <h2 className="pagamento-titulo">Depoimentos</h2>
      <div className="depoimentos-container">
        <Depoiments
          nome="Talita Villas Boas"
          foto={talitaFoto}
          texto="A Jornada foi uma das melhores agências de viagens que eu já experimentei. O serviço ao cliente foi excepcional, e toda a equipe foi muito atenciosa e prestativa."
        />
        <Depoiments
          nome="Amari Salin"
          foto={amariFoto}
          texto="Recomendo fortemente a agência de viagens Jornada. Eles oferecem um serviço personalizado e de alta qualidade que excedeu minhas expectativas em minha última viagem."
        />
        <Depoiments
          nome="Lauro B. Matos"
          foto={lauroFoto}
          texto="Recomendo fortemente a agência de viagens Jornada. Eles oferecem um serviço personalizado e de alta qualidade que excedeu minhas expectativas em minha última viagem."
        />
      </div>
    </>
  );
}
