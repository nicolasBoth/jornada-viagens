const destinos = [
  {
    nome: 'Tokyo',
    classe: 'tokyo',
    descricao:
      'Tóquio é uma cidade vibrante e cosmopolita, com seus templos históricos, museus de arte moderna e arranha-céus icônicos. Não perca a chance de mergulhar em sua atmosfera fascinante.',
  },
  {
    nome: 'Osaka',
    classe: 'osaka',
    descricao:
      'Osaka é uma cidade agitada e moderna no Japãos. A cidade é famosa por sua gastronomia deliciosa e por ser um excelente ponto de partida para explorar outras cidades japonesas próximas.',
  },
];

export default function Destines() {
  return (
    <>
      <h2 className="pagamento-titulo ">Destinos Populares</h2>
      <div className="destinos-container">
        {destinos.map(({ nome, classe, descricao }) => (
          <div key={nome} className="destino">
            <div className={`${classe}`}></div>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <button title="Clique para ver mais detalhes" className="cards-btn destino-btn">
              Ver detalhes
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
