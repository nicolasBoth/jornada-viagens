import Header from '../../components/Header';
import HeroBlog from '../../components/HeroBlog';
import JourneyHistorysBlog from '../../components/JourneyHistorysBlog';
import MorePosts from '../../components/MorePosts';
import Footer from '../../components/Footer';
import './blog.css';

export default function Blog() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-blog">
          <HeroBlog />
        </section>
        <section className="journey-historys-blog">
          <JourneyHistorysBlog />
        </section>
        <section className="destinos">
          <MorePosts />
        </section>
      </main>
      <Footer />
    </>
  );
}
