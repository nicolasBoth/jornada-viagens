import Header from '../../components/Header/index.jsx';
import HeroBlog from '../../components/HeroBlog/index.jsx';
import JourneyHistorysBlog from '../../components/JourneyHistorysBlog/index.jsx';
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
      </main>
    </>
  );
}
