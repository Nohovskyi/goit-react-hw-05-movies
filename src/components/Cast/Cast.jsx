import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditsById } from '../../api';
import css from './Cast.module.css';

const Cast = () => {
  const noImagePoster =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png';
  const pathImage = 'https://image.tmdb.org/t/p/w500';
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function creditsMovies() {
      const response = await fetchCreditsById(movieId);
      const data = response.data.cast;
      setCast(data);
    }
    creditsMovies();
  }, [movieId]);

//   console.log(cast);
    
  return (
    <>
      {cast.length ? (
        <ul className={css.list}>
          {cast.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id} className={css.list__item}>
                <img
                  src={profile_path ? pathImage + profile_path : noImagePoster}
                  alt="poster"
                  width="170"
                />
                <p className={css.list__text}>{name}</p>
                <p className={css.list__text}>Role: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We do not have any cast for this movie</p>
      )}
    </>
  );
};

export default Cast;
