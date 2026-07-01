import ImgsLogicProps from '../../types/ImgsLogicProps/type';

export default function ImgsLogic(props: ImgsLogicProps) {
  return (
    <>
      <picture className={props.classe}>
        <source media="(width < 768px)" srcSet={props.imageMobile} />
        <source media="(width < 1440px)" srcSet={props.imageTablet} />
        <img src={props.imageDesktop} alt="" className={props.classe} />
      </picture>
    </>
  );
}
