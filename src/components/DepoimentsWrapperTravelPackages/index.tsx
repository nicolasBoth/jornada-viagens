import Depoiments from '../Depoiments';
import julioImg from '../../assets/img-julio.png';
import luciaImg from '../../assets/img-lucia.png';
import olgaImg from '../../assets/img-olga.png';

export default function DepoimentsWrapperTravelPackages() {
  return (
    <>
      <h2 className="pagamento-titulo">Depoimentos</h2>
      <div className="depoimentos-container">
        <Depoiments
          nome="Júlio Garibaldi"
          foto={julioImg}
          texto="A Jornada foi uma das melhores agências de viagens que eu já experimentei. O serviço ao cliente foi excepcional, e toda a equipe foi muito atenciosa e prestativa."
        />
        <Depoiments
          nome="Lúcia S. Rabello"
          foto={luciaImg}
          texto="Minha viagem para Tóquio foi incrível. O itinerário personalizado me permitiu muito em pouco tempo. Excedeu minhas expectativas e já quero viajar com a Jornada novamente!"
        />
        <Depoiments
          nome="Olga dos Reis"
          foto={olgaImg}
          texto="A Jornada foi uma das melhores agências de viagens que eu já experimentei. O serviço ao cliente foi excepcional, e toda a equipe foi muito atenciosa e prestativa."
        />
      </div>
    </>
  );
}
