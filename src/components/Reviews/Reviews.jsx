import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from '../../api';
import { Loader } from 'components/Loader/Loader';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  //   console.log(reviews);

  useEffect(() => {
    async function reviewsMovies() {
      const response = await fetchReviewsById(movieId);
      const data = response.data.results;
      setReviews(data);
    }
    reviewsMovies();
  }, [movieId]);
  return (
    <>
      {reviews.length ? (
        <Suspense fallback={<Loader />}>
          <ul className={css.list}>
            {reviews.map(({ id, author, content }) => {
              return (
                <li key={id} className={css.list__item}>
                  <h3>Author: {author}</h3>
                  <p className={css.list__text}>{content}</p>
                </li>
              );
            })}
          </ul>
        </Suspense>
      ) : (
        <p>We do not have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
