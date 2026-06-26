import './index.css';
import Header from '../../components/Header';
import OfferWrapper from '../../components/OfferWrapper';
import HeroHome from '../../components/HeroHome';
import CategoryWrapper from '../../components/CategoryWrapper';
import DestinesWrapper from '../../components/DestinesWrapperHome';
import PaymentConditionsWrapperHome from '../../components/PaymentConditionsWrapperHome';
import DepoimentsWrapper from '../../components/DepoimentsWrapperHome';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <HeroHome />
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
          <PaymentConditionsWrapperHome />
        </section>
        <section className="depoimentos">
          <DepoimentsWrapper />
        </section>
      </main>
      <Footer hasImage />
    </>
  );
}
