import movieApi from '@/modules/movie/api/movieApi';

const API_KEY = '1563d250c557b1a41772366487575466';
export const getMovies = async (type = 'popular') => {
  const movies = await movieApi.get(`/movie/${type}?api_key=${API_KEY}`);
  const { results } = await movies.data;
  const mixMovies = results.sort(() => Math.random() - 0.5);
  return mixMovies;
};

export const getMovie = async (movieId) => {
  const theMovie = await movieApi.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return theMovie;
};
export const getMovieCredits = async (movieId) => {
  const movieCredits = await movieApi.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  return movieCredits;
};
export const getTrailer = async (id) => {
  const trailer = await movieApi.get(`/movie/${id}/videos?api_key=${API_KEY}`);
  const { results } = await trailer.data;
  return results;
};

export const getTrailers = async (movies) => {
  const [a, b, c, d] = movies;
  const promiseArr = [
    movieApi.get(`/movie/${a.id}/videos?api_key=${API_KEY}`),
    movieApi.get(`/movie/${b.id}/videos?api_key=${API_KEY}`),
    movieApi.get(`/movie/${c.id}/videos?api_key=${API_KEY}`),
    movieApi.get(`/movie/${d.id}/videos?api_key=${API_KEY}`),
  ];
  const [t1, t2, t3, t4] = await Promise.all(promiseArr);
  return [
    { videos: t1.data.results },
    { videos: t2.data.results },
    { videos: t3.data.results },
    { videos: t4.data.results },
  ];
};
