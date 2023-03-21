import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import css from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'blue' : '#000',
            })}
            className={css.nav__link__home}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            style={({ isActive }) => ({
              color: isActive ? 'blue' : '#000',
            })}
            className={css.nav__link__movies}
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
