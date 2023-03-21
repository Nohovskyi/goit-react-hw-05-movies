import PropTypes from 'prop-types';
import css from './SearchMovie.module.css';

export const SearchMovie = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.currentTarget.name.value);
    e.currentTarget.name.value = '';
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            autoComplete="off"
            type="text"
            name="name"
            placeholder="Enter movie name"
            className={css.form__input}
          />
        </label>
        <button type="submit" className={css.form__button}>
          Search
        </button>
      </form>
    </>
  );
};

SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
