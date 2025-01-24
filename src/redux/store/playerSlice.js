import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    currentTrack: null,
    isPlaying: false,
  },
  reducers: {
    playTrack: (state, action) => {
      state.currentTrack = action.payload;
      state.isPlaying = true;
    },
    stopTrack: (state) => {
      state.currentTrack = null;
      state.isPlaying = false;
    },
  },
});

export const { playTrack, stopTrack } = playerSlice.actions;
export default playerSlice.reducer;
