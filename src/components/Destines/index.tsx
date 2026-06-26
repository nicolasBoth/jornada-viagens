// export  const destinos = [
//   {
//     titulo: 'Tokyo',
//     classe: 'tokyo',
//     texto:
//       'Tóquio é uma cidade vibrante e cosmopolita, com seus templos históricos, museus de arte moderna e arranha-céus icônicos. Não perca a chance de mergulhar em sua atmosfera fascinante.',
//   },
//   {
//     titulo: 'Osaka',
//     classe: 'osaka',
//     texto:
//       'Osaka é uma cidade agitada e moderna no Japãos. A cidade é famosa por sua gastronomia deliciosa e por ser um excelente ponto de partida para explorar outras cidades japonesas próximas.',
//   },
//   {
//     titulo: 'Hiroshima',
//     texto: 'Osaka é uma cidade agitada e moderna no Japãos. A cidade é famosa por sua gastronomia deliciosa e por ser um excelente ponto de partida para explorar outras cidades japonesas próximas.'
//   },
//   {
//     titulo: 'Kyoto',
//     texto: 'Osaka é uma cidade agitada e moderna no Japãos. A cidade é famosa por sua gastronomia deliciosa e por ser um excelente ponto de partida para explorar outras cidades japonesas próximas.'
//   }
// ];
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
