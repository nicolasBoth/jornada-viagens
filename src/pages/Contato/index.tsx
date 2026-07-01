import './index.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroContact from '../../components/HeroContact';
import FormsWrapperContact from '../../components/FormsWrapperContact';

export default function Contato() {
  return (
    <>
      <Header />
      <section className="hero-blog">
        <HeroContact />
      </section>
      <section className="forms">
        <FormsWrapperContact />
      </section>
      <Footer hasImageContact />
    </>
  );
}
