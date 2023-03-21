import axios from 'axios';

const API_KEY = '9f3449ca8495a13b6d35e887839f0061';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie/`;



export async function fetchTrendingFilms(page = 1) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    page: page,
  });
  return axios.get(`${TREND_URL}?${searchParams}`);
}

export async function fetchSearchedFilms(content) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query: content,
  });
  return axios.get(`${SEARCH_URL}?${searchParams}`);
}

export async function fetchFilmById(id) {
  const movie_id = id;
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  return axios.get(`${ID_URL}${movie_id}?${searchParams}`);
}

export async function fetchCreditsById(id) {
  const movie_id = id;
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  return axios.get(
    `${BASE_URL}/movie/${movie_id}/credits?${searchParams}`
  );
}

export async function fetchReviewsById(id) {
  const movie_id = id;
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  return axios.get(`${BASE_URL}/movie/${movie_id}/reviews?${searchParams}`);
}







