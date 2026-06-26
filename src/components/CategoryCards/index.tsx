import CategoryProps from '../../types/CategoryProps/type.ts';

export default function CategoryCards(props: CategoryProps) {
  return (
    <>
      <div className="pacote">
        {props.icon}
        <h3>{props.nome}</h3>
      </div>
    </>
  );
}
