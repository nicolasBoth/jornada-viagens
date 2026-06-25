const destinos = [
  {
    titulo: 'Osaka',
    texto: 'Osaka é uma cidade agitada e moderna no Japãos. A cidade é famosa por sua gastronomia deliciosa e por ser um excelente ponto de partida para explorar outras cidades japonesas próximas.',
    classe: 'osaka'
  },
  {
    titulo: 'Hiroshima',
    texto: 'Cidade localizada no sudoeste do Japão, conhecida mundialmente por ter sido o alvo do primeiro bombardeio atômico da históri. Hoje, a cidade é um símbolo de paz e reconciliação. Além disso, Hiroshima também é conhecida por sua gastronomia.',
    classe: 'hiroshima'
  },
  {
    titulo: 'Kyoto',
    texto: 'Kyoto é uma cidade localizada no centro do Japão, conhecida por ser a antiga capital do país e preservar muitas tradições culturais japonesas. Com seus templos históricos, jardins tradicionais e cerimônias de chá, é um mergulho na cultura japonesa.',
    classe: 'kyoto'
  }
]

export default function MorePosts() {
  return (
    <>
      <h2 className="pagamento-titulo posts">Outros posts</h2>
      <div className="destinos-container">
        {destinos.map(({ titulo, classe, texto }) => (
          <div key={titulo} className="destino">
            <div className={`osaka ${classe} post-img`}></div>
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