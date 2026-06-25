export  const destinos = [
  {
    titulo: 'Tokyo',
    classe: 'tokyo',
    texto:
      'Tóquio é uma cidade vibrante e cosmopolita, com seus templos históricos, museus de arte moderna e arranha-céus icônicos. Não perca a chance de mergulhar em sua atmosfera fascinante.',
  },
  {
    titulo: 'Osaka',
    classe: 'osaka',
    texto:
      'Osaka é uma cidade agitada e moderna no Japãos. A cidade é famosa por sua gastronomia deliciosa e por ser um excelente ponto de partida para explorar outras cidades japonesas próximas.',
  },
  {
    titulo: 'Hiroshima',
    texto: 'Osaka é uma cidade agitada e moderna no Japãos. A cidade é famosa por sua gastronomia deliciosa e por ser um excelente ponto de partida para explorar outras cidades japonesas próximas.'
  },
  {
    titulo: 'Kyoto',
    texto: 'Osaka é uma cidade agitada e moderna no Japãos. A cidade é famosa por sua gastronomia deliciosa e por ser um excelente ponto de partida para explorar outras cidades japonesas próximas.'
  }
];

export default function Destines() {
  return (
    <>
      <h2 className="pagamento-titulo ">Destinos Populares</h2>
      <div className="destinos-container">
        {destinos.slice(0, 2).map(({ titulo, classe, texto }) => (
          <div key={titulo} className="destino">
            <div className={`${classe}`}></div>
            <h3>{titulo}</h3>
            <p>{texto}</p>
            <button title="Clique para ver mais detalhes" className="cards-btn destino-btn">
              Ver detalhes
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
