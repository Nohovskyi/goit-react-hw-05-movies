import { useEffect, useState, lazy, Suspense } from 'react';
import { fetchTrendingFilms } from '../../api';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import css from './Home.module.css';
const HomeList = lazy(() => import('../../components/HomeList/HomeList'));

const Home = ({ title }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getTrandMovies() {
      try {
        const response = await fetchTrendingFilms();
        const data = response.data.results;
        setFilms(data);
      } catch (error) {
        console.log(error);
      }
    }

    getTrandMovies();
  }, []);

  return (
    <main>
      <section>
        <div className={css.container}>
          <h2>{title}</h2>
          <Suspense fallback={<Loader />} />
          <HomeList films={films} />
        </div>
      </section>
    </main>
  );
};

Home.propTypes = {
  title: PropTypes.string,
};

export default Home;
