import movieApi from '@/modules/movie/api/movieApi';

const API_KEY = '1563d250c557b1a41772366487575466';
const getMovies = async (type = 'popular') => {
  const movies = await movieApi.get(`/movie/${type}?api_key=${API_KEY}`);
  const { results } = await movies.data;
  const mixMovies = results
    .sort(() => Math.random() - 0.5);
  return mixMovies;
};
export default getMovies;
