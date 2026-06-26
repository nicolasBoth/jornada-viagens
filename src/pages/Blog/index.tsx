import './index.css';
import Header from '../../components/Header';
import HeroBlog from '../../components/HeroBlog';
import JourneyHistorysBlogWrapper from '../../components/JourneyHistorysBlogWrapper';
import DestinesWrapperBlog from '../../components/DestinesWrapperBlog'
import Footer from '../../components/Footer';

export default function Blog() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-blog">
          <HeroBlog />
        </section>
        <section className="journey-historys">
          <JourneyHistorysBlogWrapper />
        </section>
        <section className="destinos">
          <DestinesWrapperBlog />
        </section>
      </main>
      <Footer />
    </>
  );
}
