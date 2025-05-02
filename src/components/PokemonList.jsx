import { Col, Divider, Row } from "antd";
import { PokemonCard } from "./PokemonCard";
import '../components/PokemonList.css';

export const PokemonList = ({ data }) => {
    return (
        <div className="pokemon-list">
            {data.length === 0 ? (
                <h2>No Pokémon found</h2>
            ) : (
                <>
                    {
                        data.map((pokemon) => {
                            // Extract the Pokémon ID from the URL
                            // The ID is the last part of the URL, so we split by '/' and take the last element
                            // The filter(Boolean) removes any empty strings from the array created by split('/')
                            const pokemonId = pokemon.url.split('/').filter(Boolean).pop();
                            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonId}.png`;
        
                            return (
                                <PokemonCard
                                    pokemon={pokemon}
                                    key={pokemonId}
                                    url={imageUrl}
                                />
                            );
                        })
                    }
                </>
            )}
        </div>
    );
};
