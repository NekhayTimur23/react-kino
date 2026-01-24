import { SearchOfMoviesProps } from "./movie.slice";

export const FAVORITE_KEY = (name: string): string => {
  return `favorites_${name}`;
};

export function seveState<T>(key: string, state: T) {
  const stringState = JSON.stringify(state);
  localStorage.setItem(key, stringState);
}

export function validArrFaforites(name: string) {
  const data = localStorage.getItem(FAVORITE_KEY(name));
  if (!data) {
    return null;
  }

  const nameUser2 = JSON.parse(data) as Record<string, SearchOfMoviesProps>;

  console.log("data", data);
  console.log("nameUser2", nameUser2);

  return nameUser2;
}
