import JourneyHistorysBlogProps from '../../types/JourneyHistorysBlogProps/type';

export default function JourneyHistorysBlog(props: JourneyHistorysBlogProps) {
  return (
    <>
      <div className={`${props.nome}-container`}>
        <div className={`${props.nome}-info`}>
          <h2 className={`${props.nome}-titulo`}>{props.titulo}</h2>
          <p className={`${props.nome}-texto`}>{props.texto}</p>
        </div>
        <div className={props.classe}></div>
      </div>
    </>
  );
}
