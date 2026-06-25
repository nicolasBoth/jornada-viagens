import './home.css';
import Header from '../../components/Header';
import OfferWrapper from '../../components/OfferWrapper';
import Hero from '../../components/Hero';
import CategoryWrapper from '../../components/CategoryWrapper';
import Destines from '../../components/Destines';
import PaymentConditions from '../../components/PaymentConditions';
import Depoiments from '../../components/Depoiments';
import Footer from '../../components/Footer';


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <Hero />
        </section>
        <section className="ofertas">
          <OfferWrapper />
        </section>
        <section className="categoria">
          <CategoryWrapper />
        </section>
        <section className="destinos">
          <Destines />
        </section>
        <section className="pagamento">
          <PaymentConditions />
        </section>
        <section className="depoimentos">
          <Depoiments />
        </section>
      </main>
      <Footer className="img-pre-rodape" />
    </>
  );
}
