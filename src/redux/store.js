import { configureStore } from "@reduxjs/toolkit";
import { pokemonsApi } from "./pokemonsApi";
import searchReducer from "./searchSlice";
import pokemosReducer from "./pokemonsSlice";

export const store = configureStore({
  reducer: {
    // Aquí puedes agregar tus reducers
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
    search: searchReducer,
    pokemons: pokemosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonsApi.middleware),
});

export default store;