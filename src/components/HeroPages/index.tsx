import PagesHeroProps from "../../types/PagesHeroProps/type";

export default function HeroPages(props: PagesHeroProps) {
  return (
    <div className={props.background}>
      <h1 className="ofertas-titulo blog-titulo">{props.titulo}</h1>
      <p className="texto blog-texto">
        {props.texto}
      </p>
    </div>
  );
}
