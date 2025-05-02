import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const { setPokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;