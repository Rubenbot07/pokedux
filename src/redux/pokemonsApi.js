import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const pokemonsApi = createApi({
    reducerPath: 'pokemonsApi', // Nombre del reducer en el store
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemons: builder.query({
            query: ({limit = 151, offset = 0}) => `pokemon?limit=${limit}&offset=${offset}`, // Endpoint para obtener una lista de Pokémon
          }),
        getPokemonsDetails: builder.query({
          query: (name) => `pokemon/${name}`, // Endpoint para obtener los detalles de un Pokémon específico
          transformResponse: (response) => ({
            types: response.types.map((type) => type.type.name), // Extrae los tipos del Pokémon
          })
        })
    }),
  });
  
  // Exporta el hook generado automáticamente
  export const { useGetPokemonsQuery, useGetPokemonsDetailsQuery } = pokemonsApi;