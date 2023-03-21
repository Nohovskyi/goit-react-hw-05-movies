import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense, useRef } from 'react';
import { Link } from 'react-router-dom';
import { fetchFilmById } from '../../api';
import { Loader } from '../../components/Loader/Loader';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState(null);
  const pathImage = 'https://image.tmdb.org/t/p/w500';
  const noImagePoster =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png';

  const location = useLocation();
  console.log(location.state);

  const searchPath = useRef(location.state?.from.search);
  console.log(searchPath);

  const initialPath = useRef(location.state?.from.pathname);
  console.log(initialPath.current);

  let backLink = '';
  if (initialPath.current === '/') {
    backLink = '/';
  } else backLink = `/movies/${searchPath.current}`;

  useEffect(() => {
    fetchFilmById(movieId).then(r => setFilmInfo(r.data));
  }, [movieId]);

  return (
    <div className={css.container}>
      <Link
        to={backLink !== '/movies/undefined' ? backLink : '/'}
        className={css.button}
      >
        {'<- Go back'}
      </Link>
      {filmInfo && (
        <>
          <Suspense fallback={<Loader />}>
            <div key={movieId} className={css.filmInfo}>
              <img
                src={
                  filmInfo.poster_path
                    ? pathImage + filmInfo.poster_path
                    : noImagePoster
                }
                alt={filmInfo.original_title}
                width="300"
              />
              <div className={css.filmInfo__details}>
                <h2 className={css.filmInfo__details__title}>
                  {filmInfo.original_title}
                </h2>
                <p className={css.filmInfo__details__text}>
                  User Score: {filmInfo.vote_average.toFixed(2)}%
                </p>
                <h3 className={css.filmInfo__details__title}>Overview</h3>
                <p className={css.filmInfo__details__text}>
                  {filmInfo.overview}
                </p>
                <h3 className={css.filmInfo__details__title}>Genres</h3>
                <p className={css.filmInfo__details__text}>
                  {filmInfo.genres.map(genre => genre.name).join(', ')}
                </p>
              </div>
            </div>
          </Suspense>
          <div className={css.filmInfo__additional}>
            <h3 className={css.filmInfo__details__title}>
              Additional information
            </h3>
            <Link to="cast" className={css.filmInfo__additional__cast}>
              Cast
            </Link>
            <Link to="reviews" className={css.filmInfo__additional__reviews}>
              Reviews
            </Link>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
