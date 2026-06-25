import react from 'react';
import './home.css';
import Header from '../../components/Header/index.jsx';
import OfferCards from '../../components/OfferCards/index.jsx';
import Hero from '../../components/Hero/index.jsx';
import CategoryCards from '../../components/CategoryCards/index.jsx';
import Destines from '../../components/Destines/index.jsx';
import PaymentConditions from '../../components/PaymentConditions/index.jsx';
import Depoiments from '../../components/Depoiments/index.jsx';
import Footer from '../../components/Footer/index.jsx';

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <Hero />
        </section>
        <section className="ofertas">
          <OfferCards />
        </section>
        <section className="categoria">
          <CategoryCards />
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
      <footer className="rodape">
        <Footer />
      </footer>
    </>
  );
}

export default Home;
