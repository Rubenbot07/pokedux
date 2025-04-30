import { Col, Divider, Row } from "antd";
import { PokemonCard } from "./PokemonCard";
import '../components/PokemonList.css';

export const PokemonList = ({ pokemons= Array(10).fill('') }) => {
    return (
        <div className="pokemon-list">
            {pokemons.map((pokemon, index) => {
                return (
                    <PokemonCard pokemon={pokemon} key={index}/>
                );
            })}
        </div>
    );
}
