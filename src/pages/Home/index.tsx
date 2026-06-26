import './home.css';
import Header from '../../components/Header';
import OfferWrapper from '../../components/OfferWrapper';
import Hero from '../../components/Hero';
import CategoryWrapper from '../../components/CategoryWrapper';
import DestinesWrapper from '../../components/DestinesWrapper';
import PaymentConditions from '../../components/PaymentConditions';
import DepoimentsWrapper from '../../components/DepoimentsWrapper';
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
          <DestinesWrapper />
        </section>
        <section className="pagamento">
          <PaymentConditions />
        </section>
        <section className="depoimentos">
          <DepoimentsWrapper />
        </section>
      </main>
      <Footer hasImage />
    </>
  );
}
