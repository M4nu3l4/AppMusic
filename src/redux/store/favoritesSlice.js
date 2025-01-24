import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      const alreadyExists = state.find((track) => track.id === action.payload.id);
      if (!alreadyExists) {
        state.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      return state.filter((track) => track.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
