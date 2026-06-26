import Header from '../../components/Header';
import HeroTravelPackages from '../../components/HeroTravelPackages';
import DestinesWrapperTravelPackages from '../../components/DestinesWrapperTravelPackages';
import PaymentConditionsWrapperTravel from '../../components/PaymentConditionsWrapperTravel';
import DepoimentsWrapperTravelPackages from '../../components/DepoimentsWrapperTravelPackages';
import Footer from '../../components/Footer';
import './index.css';

export default function PacotesViagem() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-blog">
          <HeroTravelPackages />
        </section>
        <section className="destinos">
          <DestinesWrapperTravelPackages />
        </section>
        <section className='pagamento'>
          <PaymentConditionsWrapperTravel />
        </section>
        <section className='depoimentos'>
          <DepoimentsWrapperTravelPackages />
        </section>
      </main>
      <Footer hasImageTravel/>
    </>
  );
}
