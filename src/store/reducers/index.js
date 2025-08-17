
import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';

const reducer = combineReducers({
  movie: movieReducer,
  favorites: favoritesReducer,
});

export default reducer;