import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movie.slice";
import userSlice from "./user.slice";
import { FAVORITE_KEY, seveState } from "./storage";

export const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
  },
});

store.subscribe(() => {
  const userName = store.getState().user.userName.name;
  if (!userName) return;
  seveState(
    FAVORITE_KEY(store.getState().user.userName.name),
    store.getState().movie.arrFaforites,
  );
});

export type RootStoreApp = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
