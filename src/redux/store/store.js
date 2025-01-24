import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';
import playerReducer from './playerSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    player: playerReducer,
  },
});
