import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./storage";

export const KEY_LOC = "Login";

export interface IinitialState {
  name: string;
  isLogined: boolean;
}

export interface IinitialState2 {
  userName: IinitialState;
}

const initialState: IinitialState2 = {
  userName: loadState(KEY_LOC) ?? {
    name: "",
    isLogined: false,
  },
};

//функция получения логина из localStorage
export const getLogin = createAsyncThunk<IinitialState>(
  "auth/login/addLogin",
  async () => {
    const data = localStorage.getItem(KEY_LOC);

    if (!data) {
      const userData: IinitialState = {
        name: "Тимур",
        isLogined: false,
      };
      localStorage.setItem(KEY_LOC, JSON.stringify(userData));
      return userData;
    }
    return JSON.parse(data) as IinitialState;
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    enterSite: (state) => {
      if (state.userName.isLogined === false) {
        state.userName.isLogined = true;
        const stringState = JSON.stringify(state.userName);
        localStorage.setItem(KEY_LOC, stringState);
      }
    },
    exitSite: (state) => {
      if (state.userName.isLogined === true) {
        state.userName.isLogined = false;
        const stringState = JSON.stringify(state.userName);
        localStorage.setItem(KEY_LOC, stringState);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getLogin.fulfilled,
      (state, action: PayloadAction<IinitialState>) => {
        state.userName = action.payload;
      },
    );
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
