import { fetchSearchedFilms } from '../../api';
import { SearchMovie } from '../../components/SearchMovie/SearchMovie';
import { Suspense, useEffect, useState, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import css from './Movies.module.css';
const HomeList = lazy(() => import('../../components/HomeList/HomeList'));

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState([]);

  const search = searchParams.get('filmName');

  useEffect(() => {
    if (!search) {
      return;
    }
    async function searchMovie() {
      try {
        const response = await fetchSearchedFilms(search);
        const data = response.data.results;

        if (data.length === 0) {
          return alert('No matches please enter correct name');
        }
        setFilms(data);
      } catch (error) {
        console.log(error);
      }
    }
    searchMovie();
  }, [search]);

  const handleFromSubmit = value => {
    if (value === '') {
      return alert('the field is empty');
    }
    setSearchParams({ filmName: value });
    setFilms([]);
  };

  return (
    <main>
      <div className={css.container}>
        <SearchMovie onSubmit={handleFromSubmit} />
        <Suspense fallback={<Loader />} />
        <HomeList films={films} />
      </div>
    </main>
  );
};

export default Movies;
