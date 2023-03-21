import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { useLocation, Link } from 'react-router-dom';
import css from './HomeList.module.css';

const HomeList = ({ films }) => {
  const location = useLocation();
  // console.log(location);

  return (
    <>
      <Suspense>
        <ul className={css.list}>
          {films.map(({ id, title }) => {
            return (
              <li key={id} className={css.list__item}>
                <Link to={`/movies/${id}`} state={{ from: location }} className={css.list__link}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </Suspense>
    </>
  );
};

HomeList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default HomeList;
