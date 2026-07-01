import JourneyCityExploringProps from '../../types/JourneyCityExploringProps/type';

export default function JourneyCityExploring(props: JourneyCityExploringProps) {
  return (
    <>
      <h2 className="acomodacao-titulo">{props.titulo}</h2>
      <p className="acomodacao-texto">{props.texto}</p>
    </>
  );
}
