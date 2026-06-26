import Destines from '../Destines';

export default function DestinesWrapperTravelPackages() {
  return (
    <>
      <h2 className='pagamento-titulo'>Destinos da Excursão</h2>
      <div className="destinos-container">
        <Destines
          titulo="Tokyo"
          texto="Tóquio é uma cidade vibrante e cosmopolita, com seus templos históricos, museus de arte moderna e arranha-céus icônicos. Não perca a chance de mergulhar em sua atmosfera fascinante."
          classe="tokyo"
        />
        <Destines
          titulo="Osaka"
          texto="Osaka é uma cidade agitada e moderna no Japãos. A cidade é famosa por sua gastronomia deliciosa e por ser um excelente ponto de partida para explorar outras cidades japonesas próximas."
          classe="osaka"
        />
      </div>
    </>
  );
}
