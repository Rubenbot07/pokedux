import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPokemons: [],
    filteredPokemons: [],
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.allPokemons = action.payload;
            state.filteredPokemons = action.payload;
        },
        filteredPokemons: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.filteredPokemons = state.allPokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().startsWith(searchTerm)
      );
        }
    }
})

export const { setPokemons, filteredPokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;