import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movie.slice";
import userSlice, { KEY_LOC } from "./user.slice";
// import { seveState } from "./storage";

export const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
  },
});

// function seveState<T>(key: string, state: T) {
//   const stringState = JSON.stringify(state);
//   localStorage.setItem(key, stringState);
// }

// store.subscribe(() => {
//   seveState(KEY_LOC, store.getState().user.userName);
// });


export type RootStoreApp = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
