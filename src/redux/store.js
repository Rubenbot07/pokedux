import { configureStore } from "@reduxjs/toolkit";
import { pokemonsApi } from "./pokemonsApi";

export const store = configureStore({
  reducer: {
    // Aquí puedes agregar tus reducers
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonsApi.middleware),
});

export default store;