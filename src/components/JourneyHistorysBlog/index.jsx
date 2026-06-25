const estadia = [
  {
    name: 'chegada',
    titulo: 'Chegada',
    texto:
      'Nossa viagem começou no Aeroporto Internacional de Narita, localizado a cerca de 60 km de Tóquio. Após desembarcar e fazer todos os procedimentos de imigração, fomos recebidos pela equipe da Jornada Viagens, que nos conduziu até o nosso hotel.',
    classe: 'chegada-img',
  },
  {
    name: 'acomodacao',
    titulo: 'Acomodação',
    texto:
      'Nos hospedamos no luxuoso Hotel Okura Tokyo, localizado no bairro de Toranomon. O hotel possui uma vista incrível para a cidade, e oferece uma ampla gama de serviços, incluindo um spa, uma piscina, restaurantes renomados e um lounge bar. Ficamos encantados com a atenção aos detalhes e a qualidade do atendimento.',
    classe: 'acomodacao-img',
  },
];

export default function JourneyHistorysBlog() {
  return (
    <div className="journey-historys">
      <h2 className="pagamento-titulo">Tokyo</h2>
      {estadia.map(({ name, titulo, texto, classe }) => (
        <div key={name} className={`${name}-container`}>
          <div className={`${name}-info`}>
            <h2 className={`${name}-titulo`}>{titulo}</h2>
            <p className={`${name}-texto`}>{texto}</p>
          </div>
          <div className={classe}></div>
        </div>
      ))}
    </div>
  );
}
