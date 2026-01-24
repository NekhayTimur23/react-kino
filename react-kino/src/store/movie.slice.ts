import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { PREFIX, PREFIX2 } from "../helpers/API";
import { JsonInterfaceShort } from "../pages/FilmCard/FilmCard.props";
import { IinitialState } from "./user.slice";
import { FAVORITE_KEY, validArrFaforites } from "./storage";
import { RootStoreApp } from "./store";

export interface SearchOfMoviesProps {
  "#ACTORS": string;
  "#AKA": string;
  "#TITLE": string;
  "#YEAR": number;
  "#IMDB_ID": string;
  "#RANK": number;
  "#IMDB_URL": string;
  "#IMDB_IV": string;
  "#IMG_POSTER": string;
  photo_width: number;
  photo_height: number;
}

export interface SearchOfMoviesPropsJsonInterface {
  ok: boolean;
  description: SearchOfMoviesProps[];
  error_code: number;
}

export interface IGetDiscription {
  imdbId: string;
  short: JsonInterfaceShort;
}

export interface INameFavorite {
  favorites_$Timur: IinitialState
}

export interface FavoriteItem {
  arrFaforites: Record<string, SearchOfMoviesProps>;
  movies: Record<string, SearchOfMoviesProps>;
  nameSearchMovie: string;
  movieDiscription: Record<string, JsonInterfaceShort>;
  temporelDiscription: Record<string, JsonInterfaceShort>;
}

const initialState: FavoriteItem = {
  arrFaforites: {},
  movies: {},
  nameSearchMovie: "",
  movieDiscription: {},
  temporelDiscription: {},
};

export const getMovie = createAsyncThunk<SearchOfMoviesProps[], string>(
  "movie/getMovie",
  async (params) => {
    try {
      const {
        data: { description },
      } = await axios.get(`${PREFIX}/?q=${params}`);
      return description;
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response?.request.message);
      }
    }
  },
);

export const getDiscription = createAsyncThunk<
  IGetDiscription,
  { tt: string },
  { rejectValue: string }
>("movie/getDiscription", async (params, thunkAPI) => {
  try {
    const {
      data: { imdbId, short },
    } = await axios.get(`${PREFIX2}/movie/?tt=${params.tt}`);
    return { imdbId, short };
  } catch (e) {
    if (e instanceof AxiosError) {
      throw thunkAPI.rejectWithValue(
        "Загрузка данных фильма не осуществилась!",
      );
    }
  }

  return thunkAPI.rejectWithValue("Неизвестная ошибка!");
});


export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addNameSearchMovie: (state, action: PayloadAction<string>) => {
      state.nameSearchMovie = action.payload;
    },
    addFavoriteMovies: (state, action: PayloadAction<SearchOfMoviesProps>) => {
      const id = action.payload["#IMDB_ID"];
      state.arrFaforites[id] = action.payload;
    },
    addFromLocalStorageInFavorite: (state, action: PayloadAction<SearchOfMoviesProps>) => {
      
    },
    deleteFavoriteMovies: (state, action: PayloadAction<string>) => {
      delete state.arrFaforites[action.payload];
      delete state.movieDiscription[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovie.fulfilled, (state, action) => {
      state.movies = {};
      action.payload.forEach((el) => {
        state.movies[el["#IMDB_ID"]] = el;
      });
    });
    builder.addCase(
      getDiscription.fulfilled,
      (state, action: PayloadAction<IGetDiscription>) => {
        if (!Object.keys(state.arrFaforites).includes(action.payload.imdbId)) {
          state.temporelDiscription = {};
          state.temporelDiscription[action.payload.imdbId] =
            action.payload.short;
          return;
        }
        state.movieDiscription[action.payload.imdbId] = action.payload.short;
      },
    );
  },
});

export default movieSlice.reducer;
export const movieActions = movieSlice.actions;
