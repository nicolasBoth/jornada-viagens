const cards = [
  {
    nome: 'Japao',
    classe: 'japao',
    preco: 'R$ 4000',
  },
  {
    nome: 'San Andreas',
    classe: 'san-andreas',
    preco: 'R$ 3000',
  },
  {
    nome: 'Paraiba',
    classe: 'paraiba',
    preco: 'R$ 1200',
  },
  {
    nome: 'Manaus',
    classe: 'manaus',
    preco: 'R$ 1600',
  },
];

export default function OfferCards() {
  return (
    <>
      <h2 className="ofertas-titulo">Ofertas da semana</h2>
      <div className="cards">
        {cards.map(({ nome, classe, preco }) => (
          <div key={`${nome}-${classe}`} className={`card ${classe}`}>
            <h4>HOTEL+AÉREO</h4>
            <h3>{nome}</h3>
            <h3>{preco}</h3>
            <a title="Clique para ver mais detalhes" className="cards-btn">
              Ver detalhes
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
