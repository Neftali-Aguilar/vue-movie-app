import { createStore } from 'vuex';
import favoriteMovie from '@/store/favoriteMovie';

const store = createStore({
  modules: {
    favoriteMovie,
  },
});

export default store;
